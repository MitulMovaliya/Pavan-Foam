const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    specifications: [
      {
        type: String,
        required: true,
      },
    ],
    isDeleted: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: String,
      required: true,
    },
    lastUpdatedBy: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Add a method to soft delete the product
productSchema.methods.softDelete = function (userId) {
  this.isDeleted = true;
  this.lastUpdatedBy = userId;
  return this.save();
};

exports.Product = mongoose.model("Product", productSchema);
