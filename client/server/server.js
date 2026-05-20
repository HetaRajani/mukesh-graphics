;
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";




import contactRoutes from "./routes/contactRoutes.js";
import quoteRoutes from "./routes/quoteRoutes.js";

dotenv.config();

const app = express();

/* CORS */

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5176",
      "https://printcraft-express.vercel.app",
      "https://printcraft-express-o7j24kqup-metro-matcha.vercel.app"
    ],
    credentials: true,
  })
);
/* BODY */

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

/* STATIC */

app.use("/uploads", express.static("uploads"));

/* ROUTES */

app.use("/api/contact", contactRoutes);

app.use("/api/quote", quoteRoutes);




/* TEST ROUTE */

app.get("/", (req, res) => {
  res.send("API Working");
});

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