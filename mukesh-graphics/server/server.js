import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import contactRoutes from "./routes/contactRoutes.js";
import quoteRoutes from "./routes/quoteRoutes.js";

dotenv.config();

const app = express();

/* CORS */

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5176",

  // NEW FRONTEND URLS
  "https://mukesh-graphics.vercel.app",
  "https://mukesh-graphics-git-main-hetarajani.vercel.app",
  "https://mukesh-graphics-hetarajani.vercel.app",

  // RENDER FRONTEND
  "https://mukesh-graphics.onrender.com",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },

    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],

    credentials: true,
  })
);

/* BODY */

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

/* STATIC */

app.use("/uploads", express.static("uploads"));

/* TEST ROUTE */

app.get("/", (req, res) => {
  res.send("Mukesh Graphics API Working");
});

/* ROUTES */

app.use("/api/contact", contactRoutes);

app.use("/api/quote", quoteRoutes);

/* DATABASE + SERVER */

const PORT = process.env.PORT || 5050;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB Error:", err.message);
  });