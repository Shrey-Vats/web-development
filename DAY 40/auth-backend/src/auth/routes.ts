import { Router } from 'express';
import passport from 'passport';
import { Login, register, googleCallback, Logout } from '../controllers/auth.controller.ts';

const router = Router();

router.post('/register', register);
router.post('/login', Login);
router.get(
    '/google', 
    passport.authenticate('google', { scope: ['profile', 'email']})
)

router.get(
    '/google/callback', 
    passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res) => {
        res.redirect('/'); // Redirect to a success page or home
        res.json(req.user)
    }
)
router.get('/logout', Logout);


export default router;
