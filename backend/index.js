const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.EXPRESS_PORT_DOCKER;
const router = require("./endpoints");

app.use(express.json());

app.use("/", router);

app.get("/test", (req, res) => {
  res.send("Hello World!");
});

app.post("/name", (req, res) => {
  res.json(req.body.name);
});

app.listen(port, () => {
  console.log(
    `Example app listening at http://localhost:"3000_LOCAL" || "8000_DOCKER"`
  );
});
