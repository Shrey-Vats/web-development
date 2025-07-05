const express = require("express");
const app = express();
app.use(express.json());

app.post("/login", (req, res) => {
  const { username } = req.body;
  res.json({ token: `fake-jwt-token-for-${username}` });
});

app.listen(5001, () =>
  console.log("✅ Auth service running on http://localhost:5001")
);
