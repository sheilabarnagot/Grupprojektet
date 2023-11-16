const express = require("express");
var cors = require("cors");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.EXPRESS_PORT_LOCAL;
const router = require("./endpoints");

app.use(cors());
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
