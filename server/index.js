const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const { productRounter } = require("./routers/product-router");
const { authRouter } = require("./routers/auth-router");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

const err = (e) => {
  console.log(e);
};

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI).catch(err);
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("error occured", error);
  }
};

connectDB();

let count = 0;

const counter = (req, res, next) => {
  count++;
  next();
};
app.use(counter);

app.use((req, res, next) => {
  req.time = new Date(Date.now()).toString();
  console.log(`${req.time} from ${req.method} to ${req.url}`);
  next();
});

app.get("/", (req, res) => {
  res.json({
    message: "Hello from the server",
    data: `API called ${count} Times!`,
  });
});

app.use("/api/auth", authRouter);
app.use("/api/product", productRounter);

app.listen(process.env.PORT, () => {
  console.log("Server URL : http://localhost:" + process.env.PORT);
});
