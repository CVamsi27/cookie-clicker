import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose
  // eslint-disable-next-line no-undef
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to DB"))
  .catch(() => console.error("DB Connection failed"));

console.log(process.env.MONGO_URI);

app.use("/api", userRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
