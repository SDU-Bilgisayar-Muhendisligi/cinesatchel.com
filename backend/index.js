const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/users");
const videoRoute = require("./routes/videos");
const authRoute = require("./routes/auth");

dotenv.config();

mongoose
    .connect(process.env.MONGO_ULR, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("DB connected"))
    .catch((err) => console.log(err));

app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/videos", videoRoute);
app.use("/api/auth", authRoute);

app.listen(process.env.PORT, () => {
    console.log("Backend server started");
});