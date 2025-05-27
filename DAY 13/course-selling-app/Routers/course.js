const {Router} = require("express");
const courseRouter = Router();

courseRouter.post("/purchase", (req, res) => {
  res.json({
    message: "done here",
  });
});

courseRouter.get("/preview", (req, res) => {
  res.json({
    message: "Done here also !!",
  });
});

module.exports = {
  courseRouter,
};