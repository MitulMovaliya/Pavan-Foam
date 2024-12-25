const express = require("express");
const {
  signIn,
  signUp,
  signOut,
  getUserProfile,
} = require("../controllers/authController");
const { isAuthenticated } = require("../middleware/isAuthenticated");
const { isAdmin } = require("../middleware/isAdmin");
const router = express.Router();

router.post("/signin", signIn);
router.post("/signup", signUp);
router.get("/signout", isAuthenticated, signOut);
router.get("/profile", isAuthenticated, getUserProfile);

exports.authRouter = router;
