const express = require("express");
const app = express();

app.get("/me", (req, res) => {
  res.json({ id: 1, name: "Shrey Vats", email: "shrey@example.com" });
});

app.listen(5002, () =>
  console.log("✅ Profile service running on http://localhost:5002")
);
