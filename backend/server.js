const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors()); // Cho phép Frontend gọi API

// Endpoint: /health
app.get('/health', (req, res) => {
    res.json({ status: "ok", app_name: process.env.APP_NAME || "DevOps-App" });
});

// Endpoint: /about (Thay thông tin của Nam vào đây)
app.get('/about', (req, res) => {
    res.json({
        name: "Lê Chí Thanh",
        id: "2251220025", 
        class: "Lớp 22CT1"
    });
});

app.listen(port, () => {
    console.log(`Backend is running on port ${port}`);
});