import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, require: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
  },
  {
    timestams: true,
  }
);

const productSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: String,
      required: true,
      default: 0,
    },
    countInStock: {
      type: String,
      required: true,
      default: false,
    },
  },
  {
    timestams: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default product;
