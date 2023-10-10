const express = require("express");
const app = express();
const medium = require("./medium-clients");
const premium = require("./premium-clients");

app.use(express.json());

app.use("/api/medium-clients", medium);
app.use("/api/premium-clients", premium);

app.get("/", function (req, res) {
  res.send("Bienvenido a la api de ADA Cars");
});

module.exports = app;
