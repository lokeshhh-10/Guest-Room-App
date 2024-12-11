const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");

const authRoutes = require("./routes/auth.js");
const listingRoutes = require("./routes/listing.js")

app.use(cors());
app.use(express.json());
// This serves the static files from the public directory
app.use(express.static("public")); 

// Routes
app.use("/auth", authRoutes);
app.use("/properties", listingRoutes)

const PORT = 8080;
// Mongoose Setup
mongoose.connect(process.env.MONGO_URL, {
  dbName: "Rabbit_Homes",
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
  console.log('MongoDB connected successfully');
})
.catch((err) => console.log(`${err} did not connect`));
