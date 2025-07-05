const express = require("express");
const app = express();

app.get("/products", (req, res) => {
  res.json([
    { id: 101, name: "Laptop" },
    { id: 102, name: "Smartphone" },
  ]);
});

app.listen(5003, () =>
  console.log("✅ Product service running on http://localhost:5003")
);
