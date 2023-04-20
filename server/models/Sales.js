import mongoose from "mongoose";

const SalesSchema = new mongoose.Schema(
  {
    userId: String,
    productArr: [String],
    totalCost:Number,


  }, 
  {timestamps: true}
);

const Product = mongoose.model("Product", ProductSchema);
export default Product;