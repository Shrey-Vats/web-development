import type { Request, Response, NextFunction } from "express";
import prisma from "../config/db.ts";
import { hashPassword } from "../utils/hash.ts";
import type { RegisterInput } from "../types/register.types.ts";
import passport from "passport";

export const register = async (req: Request<{}, {}, RegisterInput>, res: Response) => {
    try {
        const { username, email, password } = req.body;

        const existingUser = await prisma.user.findUnique({
            where: { email },
        });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists", success: false });
        }

        const hashedPassword = await hashPassword(password);

        const user = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
                provider: "local",
            }
        })

        return res.status(201).json({
            id: user.id,
            email: user.email,
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            success: false
        })
    }
}

export const Login = async (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate('local', (err: any, user: any) => {
        if (err) return next(err);
        if(!user){
            return res.status(400).json({
                message: "Invalid credentials",
                success: false
            });
        }
        req.logIn(user, (err) => {
            if (err) return next(err);
            const {id, email, provider} = user
            return res.status(200).json({
                id, email, provider,
            })
        })
    })(req, res, next);
}

export const googleCallback = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate('google', { failureRedirect: '/login' }, (err, user: any, info) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.status(401).json({
        message: 'Google authentication failed',
        success: false
      });
    }

    req.logIn(user, (err) => {
      if (err) return next(err);

      const { id, email, provider, username } = user;

      return res.status(200).json({
        message: 'Google authentication successful',
        user: { id, email, provider, username },
        success: true
      });
    });
  })(req, res, next);
};


export const Logout = (req: Request, res: Response) => {
    req.logout(err => {
        if (err) {
            return res.status(500).json({
                message: "Logout failed",
                success: false
            });
        }
        return res.status(200).json({
            message: "Logout successful",
            success: true
        });
    })
}