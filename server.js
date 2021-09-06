require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const port = 4600;
const url = process.env.MONGODB_URL;
const app = express();
const path = require("./Router");
const cors = require("cors");

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })

  .then(() => {
    console.log("Database is connected successfully");
  });

(err) => console.log(err.message);

app.use(express.static("./uploads"));
app.use(express.json());
app.use(cors());
app.use("/churchdata", path);

app.get("/", async (req, res) => {
  res.send("connected successfully");
});

app.get("/", async () => {
  console.log("Database has been created successfully");
});

app.listen(port, () => {
  console.log(`the server is currently running on port: ${port}`);
});
