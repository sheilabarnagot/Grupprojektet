const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/test", (req, res) => {
  res.send("Hello World!");
});

app.post("/name", (req, res) => {
  res.json(req.body.name);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
