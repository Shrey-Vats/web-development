const {Router} = require("express");
const adminRouter = Router();
const bcrypt = require("bcrypt")

const {Admin, Course} = require("../db/user.js");
const { adminSchema } = require("../validation/admin.js");
const { adminMiddleware } = require("../middlewares/admin.js");

adminRouter.post("/signup",adminSchema, async (req, res) => {

  const { name, email, password } = req.body;

  try {
    // 2. Check if user already exists
    const existingUser = await Admin.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        message: "Email already exists",
      });
    }

    // 3. Hash the password
    const hashedPassword = await bcrypt.hash(password, 8);

    // 4. Create user
    const userData = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    if (!userData) {
      return res.status(500).json({
        message: "Something went wrong while creating the user",
      });
    }

    // 5. Return success
    return res.status(201).json({
      message: "User created successfully",
      user: {
        id: userData._id,
        name: userData.name,
        email: userData.email,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
}); 


adminRouter.post("/signin", async (req, res) => {
  const {email, password} = req.headers;

  const emailCheck = await User.findOne({email})

  if(!emailCheck){
    return res.status(403).json({
      message: "email doesn't exit"
    })
  }
  const comparePassword = await bcrypt.compare(password, emailCheck.password)

  if(!comparePassword){
    return res.status(403).json({
      message: "Incoorect password"
    })
  }

  const token = jwt.sign(
    {
      userId: emailCheck._id,
    },
    process.env.JWT_ADMIN_SECREAT
  );

  res.json({
    token: token
  })
});


adminRouter.post("/course", adminMiddleware, async (req, res)=> {
    const adminId  = req.adminId; 
    const {title, description, price, imageUrl} = req.body

    if(!title || !description || !price || !imageUrl){
      return res.status(402).json({
        message: "something is messaing"
      })
    }

    const data = await Course.create({
      title,
      description,
      price,
      imageUrl,
      creatorId: adminId 
    })

    if(!data){
      return res.status(500).json({
        message: "something went wrong, try again"
      })
    }

    res.json({
      message: "course created",
      courseId: adminId 
    })
})


adminRouter.put("/course", adminMiddleware,  async (req, res)=> {
  const adminId  = req.adminId;

  const { title, description, price, imageUrl, courseId } = req.body;

  if (!title || !description || !price || !imageUrl) {
    return res.status(402).json({
      message: "something is missing",
    });
  }

  const data = await Admin.findOneAndUpdate(
    { creatorId: adminId , _id: courseId },
    { $set: { title, description, price, imageUrl } },
    {new: true,upsert: false},
  );
  
  if(!data){
    return res.status(402).json({
      message: "course not found"
    })
  }

  res.json({
    message: "created successfully"
  })
})


adminRouter.get("/course/bulk", (req, res)=> {
    const adminId = req.adminId;
    const courseId = req.body.courseId 

    const check = Admin.findOne({_id:adminId});

    if(!check){
      return res.status(402).json({
        message: "admin does not exit"
      })
    }

    const admin = Course.find({
      _id: courseId,
    });

  if(admin.length == 0){
    return res.status(401).json({
      message: "there is no course yet"
    })
  }

  res.json({
    admin
  })
})

module.exports = {
  adminRouter,
};
