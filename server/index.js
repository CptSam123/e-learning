import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./database/db.js";
import cors from "cors";

dotenv.config();

const app = express();

// using middlewares
app.use(express.json());

// Update the CORS options here
const corsOptions = {
  origin: "http://localhost:5173", // Set your frontend origin URL
  credentials: true,              // Enable credentials (cookies, HTTP authentication)
};

app.use(cors(corsOptions)); // Use the updated CORS configuration

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Server is working");
});

app.use("/uploads", express.static("uploads"));

// importing routes
import userRoutes from "./routes/user.js";
import courseRoutes from "./routes/course.js";
import adminRoutes from "./routes/admin.js";

// using routes
app.use("/api", userRoutes);
app.use("/api", courseRoutes);
app.use("/api", adminRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  connectDb();
});