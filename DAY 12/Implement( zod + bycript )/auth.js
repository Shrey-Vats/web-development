const jwt = require("jsonwebtoken")
require("dotenv").config()

function auth(req, res, next) {
  const token = req.headers.token;
  const decodedToken = jwt.verify(token, JWT_SCREAT);

  if (decodedToken) {
    req.userId = decodedToken.id;
    next();
  } else {
    res.status(401).json({
      message: "error not verify",
    });
  }
}

export default auth