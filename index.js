require('dotenv').config();
const express = require("express");
const cors = require("cors");
const routesV1 = require("./routesV1");
const app = express();
const db = require("./models/database");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const PORT = process.env.PORT || 8000;

app.use("/api/v1", routesV1);

app.get("/", (req, res) => {
    res.status(200).send(`Hello`);
});

app.get("*", (req, res) => {
    res
        .status(404)
        .send(
            `<h1>ERROR! Page Not Found!</h1><p>Please read docs for reference</p>`
        );
});

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}...`);
});
