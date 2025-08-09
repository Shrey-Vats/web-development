import prisma from "../config/db.ts";
import passport from "passport";
import { Strategy as GoogleStrategy} from 'passport-google-oauth20';
import { Strategy as LocalStrategy } from "passport-local";
import { hashCompare } from "../utils/hash.ts";
import type { User } from "../../generated/prisma/index.ts";

passport.use(new LocalStrategy(
    { usernameField: 'email'},
    async (email, password, done) => {
        try {
            const user = await prisma.user.findUnique({
                where: { email }
            })
            if (!user){
                return done(null, false, { message: "User not found" });
            }

            const isPasswordValid = await hashCompare(password, user.password)
            if (!isPasswordValid) {
                return done(null, false, { message: "Invalid password" });
            }

            return done(null, user);
        } catch (error) {
            return done(error);
        }
    }
))

if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET || !process.env.GOOGLE_CALLBACK_URL) {
    throw new Error("Google OAuth environment variables are not set");
}

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL
},
    async (accessToken, refreshToken, profile, done) => {
        try {
            let user = await prisma.user.findUnique({
                where: { googleId: profile.id}
            })

            if(user) {
                return done(null, user);
            }

            const email = profile.emails?.[0]?.value;

            if(email){
                const userByEmail = await prisma.user.findUnique({
                    where: { email}
                })

                if(userByEmail){
                    user = await prisma.user.update({
                        where: { email },
                        data: { googleId: profile.id, provider: 'google' }
                    })
                    return done(null, user);
                }
            }

            user = await prisma.user.create({
                data: {
                    email: email || '',
                    provider: 'google',
                    googleId: profile.id,
                    username: profile.displayName,
                    password: profile.displayName
                }
            })

            return done(null, user)
        } catch (err) {
           return done(err);
        }
    }
))

passport.serializeUser((user: any, done) => {
    done(null, (user as User).id);
})

passport.deserializeUser(async (id, done) => {
    try {
        const user = await prisma.user.findUnique({
            where: { id: Number(id) }
        })

        done(null, user);
        
    } catch (error) {
        done(error);
        
    }
})