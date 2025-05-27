const express = require("express");
const {userRouter} = require("./Routers/user.js");
const {courseRouter} = require("./Routers/course.js")
const {adminRouter} = require("./Routers/admin.js")

const app = express();
app.use(express.json());

app.use("/api/v1/user", userRouter)
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRouter)



app.listen(3000)