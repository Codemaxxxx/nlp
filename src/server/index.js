const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const { analyse } = require("./analyse.js");

// Initialising the Middleware
app.use(cors());

//Configuring env files
dotenv.config()

port = 8000;
const Key = process.env.API_KEY

app.use(express.json())

app.get("/", (req, res) => {
    res.send("server running")
});

app.post("/", async (req, res) => {
    const url = req.body;
    const Analyzer = analyse(url, Key)

})



app.listen(8000, () => console.log(`server is running on port ${port}`))