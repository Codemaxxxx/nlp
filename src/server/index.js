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
app.use(express.static('dist'))

app.get("/", (req, res) => {
    res.render("index.html")
});

app.post("/", async (req, res) => {
    const url = req.body.input
    const Analyzer = await analyse(url, Key)
    const {code, msg, sample} = Analyzer
    if(code == 100 || code ==212) {
       return res.send({msg: msg, code: code})
    }

    return res.send({sample: sample, code: code })
    //console.log(Analyzer)

})



app.listen(8000, () => console.log(`server is running on port ${port}`))