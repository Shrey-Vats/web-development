import { registerSchema } from "../Schemas/register.schema.js";
import { z } from "zod";

export type RegisterInput = z.infer<typeof registerSchema>