import path from "path";
import express from "express";
import dotenv from "dotenv";
import connectDB from "./Database/connectDB.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

connectDB();


const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();


// Middlewares
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use("/api/users", userRoutes);


server.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`));

