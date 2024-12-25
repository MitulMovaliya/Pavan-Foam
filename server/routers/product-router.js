const express = require("express");
const { isAuthenticated } = require("../middleware/isAuthenticated");
const { isAdmin } = require("../middleware/isAdmin");
const {
  createProduct,
  getAllProduct,
  getProduct,
  updateProduct,
  softDeleteProduct,
  deletedProducts,
} = require("../controllers/productController");
const router = express.Router();

router.post("/new", isAuthenticated, isAdmin, createProduct);
router.put("/update/:id", isAuthenticated, isAdmin, updateProduct);
router.delete("/delete/:id", isAuthenticated, isAdmin, softDeleteProduct);
router.get("/get", getAllProduct);
router.get("/get/:id", getProduct);
router.get("/deleted", deletedProducts);

exports.productRounter = router;
