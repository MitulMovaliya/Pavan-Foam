const { User } = require("../models/user");

exports.isAdmin = async (req, res, next) => {
  try {
    if (!req.id) return false;

    const user = await User.findById(req.id);

    let isAdmin = user.role === "admin";

    if (!isAdmin)
      return res.status(401).json({
        message: "Unauthorized",
        success: false,
      });

    next();
  } catch (error) {
    console.log(error);
  }
};
