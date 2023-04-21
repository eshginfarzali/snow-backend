import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import categoryRoutes from "./routes/category.js";
import expeditorsRoutes from "./routes/expeditors.js";
import managementRoutes from "./routes/management.js";
import productsRoutes from "./routes/products.js";
import salesRoutes from "./routes/sales.js";
import subcategoryRoutes from "./routes/subcategory.js";

//data imports
import User from "./models/User.js";
import { dataUser } from "./data/index.js";

/* CONFIGURATION*/

dotenv.config();
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */
app.use("category", categoryRoutes);
app.use("/expeditors", expeditorsRoutes);
app.use("/management", managementRoutes);
app.use("/products", productsRoutes);
app.use("/sales", salesRoutes);

/*MONGOOSE SETUP */
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port : ${PORT}`));
    /* ONLY ADD DATA ONE TIME */
   // User.insertMany(dataUser)
  })
  .catch((error) => console.log(`${error} did not connect`));


