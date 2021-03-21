import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    //here this user is the one who buy's the order
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    orderItems: [
      {
        name: { type: String, required: true },
        qty: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        products: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Product",
        },
      },
    ],
    shippingAddress: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    paymentResult: {
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      email_address: { type: String },
    },
    taxPrice: {
      type: String,
      required: true,
      default: 0.0,
    },
    taxPrice: {
      type: String,
      required: true,
      default: 0.0,
    },
    totalPrice: {
      type: String,
      required: true,
      default: 0.0,
    },
    isPaid: {
      type: String,
      required: true,
      default: 0.0,
    },
    paidAt: {
      type: Date,
    },
    isDelivered: {
      type: Boolean,
      required: true,
      default: true,
    },
    deliveredAt: {
      type: Date,
    },
  },
  {
    timestams: true,
  }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
