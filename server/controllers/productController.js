const { default: mongoose } = require("mongoose");
const { Product } = require("../models/product");

exports.createProduct = async (req, res) => {
  try {
    const { name, image, description, specifications } = req.body;

    const userId = req.id;

    if (!name || !image || !description || !specifications) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    const product = await Product.create({
      name,
      image,
      description,
      specifications,
      createdBy: userId,
      lastUpdatedBy: userId,
    });

    return res.status(201).json({
      success: true,
      message: "Product created successfully.",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Failed to create product",
    });
  }
};

exports.getAllProduct = async (req, res) => {
  try {
    const product = await Product.find({ isDeleted: false }).select(
      "-isDeleted -createdBy -lastUpdatedBy -createdAt -updatedAt -__v"
    );
    return res.status(201).json({
      success: true,
      data: product,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Failed to get products",
    });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const productID = req.params.id;

    const validProductID = mongoose.Types.ObjectId.isValid(productID);

    if (!validProductID)
      return res.status(404).json({
        success: false,
        message: "Product not found.",
      });

    const product = await Product.findOne({
      _id: productID,
      isDeleted: false,
    }).select(
      "-isDeleted -createdBy -lastUpdatedBy -createdAt -updatedAt -__vl;"
    );

    if (!product)
      return res.status(404).json({
        success: false,
        message: "Product not found.",
      });

    return res.status(200).json({
      success: true,
      data: product,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch product",
    });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { name, image, description, specifications } = req.body;

    const userId = req.id;

    const validProductID = mongoose.Types.ObjectId.isValid(req.params.id);

    if (!validProductID)
      return res.status(404).json({
        success: false,
        message: "Product not found.",
      });

    const oldProduct = await Product.findOne({
      _id: req.params.id,
      isDeleted: false,
    });

    if (!oldProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    const oldProductData = oldProduct.toObject();
    let isModified = false;

    // Only update fields that have changed
    if (name && name !== oldProduct.name) {
      oldProduct.name = name;
      isModified = true;
    }
    if (image && image !== oldProduct.image) {
      oldProduct.image = image;
      isModified = true;
    }
    if (description && description !== oldProduct.description) {
      oldProduct.description = description;
      isModified = true;
    }
    if (
      specifications &&
      JSON.stringify(specifications) !==
        JSON.stringify(oldProduct.specifications)
    ) {
      oldProduct.specifications = specifications;
      isModified = true;
    }

    if (isModified) {
      oldProduct.lastUpdatedBy = userId;
      const updatedProduct = await oldProduct.save();

      return res.status(201).json({
        success: true,
        message: "Product updated.",
      });
    } else {
      return res.status(201).json({
        success: true,
        message: "Product already updated.",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Failed to update product",
    });
  }
};

exports.softDeleteProduct = async (req, res) => {
  try {
    const userId = req.id;

    const validProductID = mongoose.Types.ObjectId.isValid(req.params.id);

    if (!validProductID)
      return res.status(404).json({
        success: false,
        message: "Product not found.",
      });

    const product = await Product.findOne({
      _id: req.params.id,
      isDeleted: false,
    });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    await product.softDelete(userId);

    return res.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Failed to update product",
    });
  }
};

exports.deletedProducts = async (req, res) => {
  try {
    const product = await Product.find({ isDeleted: true }).select(
      "-isDeleted -createdBy -lastUpdatedBy -createdAt -updatedAt -__v"
    );
    return res.status(201).json({
      success: true,
      data: product,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Failed to update product",
    });
  }
};
