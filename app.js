const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/route");

const app = express();
app.use(express.json());
app.use('/', router);

const port = process.env.PORT || 5000;
const uri = process.env.MONGODB_URI;

mongoose
    .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    .then(() => {
        console.log("CONNECTED TO DATABASE");
    });

app.listen(port, () => { console.log("Server is up and running at port 5000"); })