import mongoose from "mongoose";

const ExpeditorSchema = new mongoose.Schema(
  {
    userId: String,
    sumSales: Number,
    salesProduct: [String],
    
  }, 
  {timestamps: true}
);

const Expeditor = mongoose.model("Category", CategorySchema);
export default Category;