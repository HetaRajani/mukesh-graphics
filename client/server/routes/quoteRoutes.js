import express from "express";
import multer from "multer";

import Quote from "../models/Quote.js";

const router = express.Router();

/* MULTER */

const storage = multer.diskStorage({

  destination: (req, file, cb) => {

    cb(null, "uploads/");

  },

  filename: (req, file, cb) => {

    cb(
      null,
      Date.now() + "-" + file.originalname
    );

  },

});

const upload = multer({ storage });

/* ROUTE */

router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Quote route working",
  });
});

router.post(
  "/",
  upload.single("file"),
 
  async (req, res) => {

    try {

      const newQuote = new Quote({

        fullName: req.body.fullName,

        email: req.body.email,

        phone: req.body.phone,

        company: req.body.company,

        service: req.body.service,

        quantity: req.body.quantity,

        budget: req.body.budget,

        projectDetails: req.body.projectDetails,

        file: req.file
          ? req.file.filename
          : "",

      });

      await newQuote.save();

      res.status(201).json({
        success: true,
        message: "Quote request submitted successfully",
      });

    } catch (error) {

      console.log(error);

      res.status(500).json({
        success: false,
        message: "Server Error",
      });

    }

  }
);

export default router;