const express = require("express");
const router = express.Router();

const mediumClients = [
 { nombre: "Maria", age: "23" },
 { nombre: "Ana", age: "22" },
 { nombre: "Ricardo", age: "22" },
 { nombre: "Camila", age: "21" },
 { nombre: "Angel", age: "24" },
 { nombre: "Jeison", age: "27" },
 { nombre: "Armando", age: "28" },
];

router.post("/", function (req, res) {
 const data = req.body;
 mediumClients.push(data);
 res.status(201).json({ createdClient: data });
});

router.get("/", function (req, res) {
 res.json({ clients: mediumClients });
});
router.put("/:id", function (req, res) {
 const id = req.params.id;
 const data = req.body;
 // Get the data from the request
 mediumClients[id] = data;
 res.status(200).json({ updatedClient: data });
});
router.delete("/:id", function (req, res) {
  const id = req.params.id;
  const data=  mediumClients[id]
  res.status(200).json({ deletedClient: [data] });
 });

module.exports = router;
