const {z} = require("zod");

    const adminSchema = z.object({
      name: z
        .string()
        .min(2, {message: "Name must be at least 2 characters long"})
        .max(50, {message: "Name must be less than 50 characters"})
        .regex(
          /^[a-zA-Z\s'-]+$/,
          {message: "Name can only contain letters, spaces, hyphens, and apostrophes"}
        ),

      email: z.string().email({message: "Invalid email address"}),

      password: z
        .string()
        .min(8,{message: "Password must be at least 8 characters long"})
        .regex(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/,
          {message: "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character"}
        ),
    })

module.exports = {
  adminSchema
}