import express from "express";
import asyncHandler from "express-async-handler";
const router = express.Router();
import Product from "../models/productModel.js";

//@description   fetch all prodcuts
//@description   GET /api/products
//@description   public

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});

    res.json(products);
  })
);

//@description   fetch single prodcuts
//@description   GET /api/products
//@description   public
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = products.findById(req.params.id);

    if (product) {
      res.json();
    } else {
      res.status(404).json({ message: `Product not Found` });
    }
  })
);

export default router;
