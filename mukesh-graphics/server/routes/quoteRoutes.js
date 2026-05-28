import express from "express";

import Quote from "../models/Quote.js";

const router = express.Router();

/* TEST ROUTE */

router.get("/", (req, res) => {

  res.json({
    success: true,
    message: "Quote route working",
  });

});

/* POST QUOTE */

router.post("/", async (req, res) => {

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

});

export default router;