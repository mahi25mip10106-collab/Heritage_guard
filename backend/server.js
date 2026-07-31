require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

// Serve frontend files
app.use(express.static(path.join(__dirname, "../frontend")));

// Home
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/main.html"));
});

// Pages
app.get("/tavis", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/tavis.html"));
});

app.get("/daastaan", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/daastaan.html"));
});

app.get("/parampara", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/parampara.html"));
});

// APIs
app.use("/api/tavis", require("./routes/tavis"));
app.use("/api/daastaan", require("./routes/daastaan"));
app.use("/api/parampara", require("./routes/parampara"));
app.use("/api/analytics", require("./routes/analytics"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});