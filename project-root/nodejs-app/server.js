const express = require('express');
const process = require('process');

const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
    res.json({ message: "Hello World JavaScript v1" });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

/* Handle Ctrl+C */
process.on('SIGINT', () => {
    console.log("Gracefully shutting down...");
    process.exit();
});