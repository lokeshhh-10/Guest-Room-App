const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");

const authRoutes = require("./routes/auth.js");
const listingRoutes = require("./routes/listing.js")

const allowedOrigins = [
  'http://localhost:5173', // Development frontend
  'https://guest-room-app-ns3c.vercel.app/', // Production frontend
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

// Allow all origins
// app.use(cors());
// Allow specific origin(s)
// app.use(cors({
//   origin: 'https://guest-room-app-ns3c.vercel.app/'
// }));

app.use(express.json());
// This serves the static files from the public directory
app.use(express.static("public")); 

// Routes
app.use("/auth", authRoutes);
app.use("/properties", listingRoutes)

app.get('/auth/:param', (req, res) => {
  res.send(`Auth route with param: ${req.params.param}`);
});

app.get('/properties/:param', (req, res) => {
  res.send(`Properties route with param: ${req.params.param}`);
});


const PORT = process.env.PORT || 3000;

// const PORT = 8080;
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
