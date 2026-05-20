import express from "express";
import Quote from "../models/Quote.js";

const router = express.Router();

router.get("/quotes", async (req, res) => {
  const quotes = await Quote.find().sort({ createdAt: -1 });
  res.json({ success: true, data: quotes });
});

router.delete("/quotes/:id", async (req, res) => {
  await Quote.findByIdAndDelete(req.params.id);
  res.json({ success: true, message: "Quote deleted" });
});

export default router;