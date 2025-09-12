require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

// 🔧 Config
const PORT = process.env.PORT || 8080;
const MONGO_URI = process.env.MONGO_URI;

// ✅ CORS Setup
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}));

// 📦 Middleware
app.use(bodyParser.json());

// 🔌 MongoDB Connection
console.log("Connecting to MongoDB URI:", MONGO_URI);
mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ DB Connected"))
  .catch(err => console.error("❌ DB Connection Error:", err));

/* ---------------- Schemas ---------------- */
const volunteerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  skills: String,
  message: String,
  date: { type: Date, default: Date.now }
});
const Volunteer = mongoose.model("Volunteer", volunteerSchema);

const partnerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  message: String,
  date: { type: Date, default: Date.now }
});
const Partner = mongoose.model("Partner", partnerSchema);

const donateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  amount: { type: Number, required: true },
  message: String,
  date: { type: Date, default: Date.now }
});
const Donate = mongoose.model("Donate", donateSchema);

const programSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true, unique: true },
  description: String,
  details: String,
  image: String,
  date: { type: Date, default: Date.now }
});
const Program = mongoose.model("Program", programSchema);

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now }
});
const Contact = mongoose.model("Contact", contactSchema);

/* ---------------- Routes ---------------- */
app.get("/", (req, res) => res.send("🚀 NGO Backend API running..."));

/* --- Volunteers --- */
app.post("/api/volunteers", async (req, res) => {
  try {
    const newVolunteer = new Volunteer(req.body);
    await newVolunteer.save();
    res.status(201).json({ message: "✅ Volunteer added!" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
app.get("/api/volunteers", async (req, res) => {
  const volunteers = await Volunteer.find().sort({ date: -1 });
  res.json(volunteers);
});

/* --- Partners --- */
app.post("/api/partners", async (req, res) => {
  try {
    const newPartner = new Partner(req.body);
    await newPartner.save();
    res.status(201).json({ message: "✅ Partner added!" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
app.get("/api/partners", async (req, res) => {
  const partners = await Partner.find().sort({ date: -1 });
  res.json(partners);
});

/* --- Donates --- */
app.post("/api/donates", async (req, res) => {
  try {
    const newDonate = new Donate(req.body);
    await newDonate.save();
    res.status(201).json({ message: "✅ Donation added!" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
app.get("/api/donates", async (req, res) => {
  const donations = await Donate.find().sort({ date: -1 });
  res.json(donations);
});

/* --- Programs --- */
app.post("/api/programs", async (req, res) => {
  try {
    const newProgram = new Program(req.body);
    await newProgram.save();
    res.status(201).json({ message: "✅ Program added!" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
app.get("/api/programs", async (req, res) => {
  const programs = await Program.find().sort({ date: -1 });
  res.json(programs);
});
app.get("/api/programs/:category", async (req, res) => {
  try {
    const program = await Program.findOne({ category: req.params.category });
    if (!program) return res.status(404).json({ error: "Program not found" });
    res.json(program);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* --- Contact Messages --- */
app.post("/api/contact", async (req, res) => {
  try {
    const newMessage = new Contact(req.body);
    await newMessage.save();
    res.status(201).json({ message: "✅ Message received!" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
app.get("/api/contact", async (req, res) => {
  const messages = await Contact.find().sort({ date: -1 });
  res.json(messages);
});

/* ---------------- Start Server ---------------- */
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));