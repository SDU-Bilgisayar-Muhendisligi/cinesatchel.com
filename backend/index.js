const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const videoRoute = require("./routes/videos");
const cors = require("cors")

dotenv.config();

mongoose
    .connect(process.env.MONGODB_URI.toString(), {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("DB connected"))
    .catch((err) => console.log(err));

app.use(cors({
    origin: '*',
    Credentials: true,
    allowedHeaders: 'Content-Type,Authorization',
    methods: 'GET,PUT,POST,DELETE'
}));/*
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://cinesatchel-com-full.vercel.app');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', "Content-Type");
    next();
});*/

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/videos", videoRoute);

app.listen(process.env.PORT, () => {
    console.log("Backend server started");
});
