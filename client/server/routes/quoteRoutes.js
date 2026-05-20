import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";

import Quote from "../models/Quote.js";

const router = express.Router();

/* CREATE UPLOADS FOLDER */

const uploadPath = path.join(process.cwd(), "uploads");

if (!fs.existsSync(uploadPath)) {

  fs.mkdirSync(uploadPath, { recursive: true });

}

/* MULTER */

const storage = multer.diskStorage({

  destination: (req, file, cb) => {

    cb(null, uploadPath);

  },

  filename: (req, file, cb) => {

    cb(
      null,
      Date.now() + "-" + file.originalname
    );

  },

});

const upload = multer({ storage });

/* TEST ROUTE */

router.get("/", (req, res) => {

  res.json({
    success: true,
    message: "Quote route working",
  });

});

/* POST ROUTE */

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

      console.log("QUOTE ERROR:", error);

      res.status(500).json({

        success: false,

        message: "Server Error",

      });

    }

  }
);

export default router;