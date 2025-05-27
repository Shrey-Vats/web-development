const {z} = require("zod");

    const userSignupSchema = z.object({
      name: z
        .string()
        .min(2, { message: "Name must be at least 2 characters long" })
        .max(50, { message: "Name must be less than 50 characters" })
        .regex(/^[a-zA-Z\s'-]+$/, {
          message:
            "Name can only contain letters, spaces, hyphens, and apostrophes",
        }),

      email: z.string().trim().email({ message: "Invalid email address" }),

      password: z
        .string()
        .min(8, { message: "Password must be at least 8 characters long" })
        .regex(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/,
          {
            message:
              "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character",
          }
        ),
    });

    const userSigninSchema = z.object({
      email: z.string().trim().email({ message: "Invalid email address" }),

      password: z.string(),
    });

module.exports = {
  userSignupSchema,
  userSigninSchema,
};
