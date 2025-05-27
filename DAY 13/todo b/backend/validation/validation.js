const {z} = require("zod")

function signupValidation(req, res, next){
    const schema = z.object({
      name: z
        .string()
        .min(4, { message: "Name must be 4 cherecter long" }),

      email: z
        .string()
        .email({ message: "Invalid email!" }),

      password: z
        .string()
        .min(8, { message: "Password must be at least 8 cherecter long" }),
    });
    const validastion = schema.safeParse(req.body);

    if (!validastion.success) {
      res.status(403).json({
        message: " invalid structure",
      });
      return;
    }
    next()
}

function signinValidation(req, res, next){
    const schema = z.object({
        email: z
          .string()
          .email({message: "invalid email"}),

        password: z
          .string()
          .min(8, {message: "Password must be at least 8 cherecheter"})
    })

    const validation = schema.safeParse(req.body)

    if(!validation.success){
        res.status(403).json({
            message: "invalid structre"
        })
        return;
    }
    next()
}

module.exports = {
    signupValidation,
    signinValidation
}