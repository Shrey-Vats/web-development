import express from 'express';
import dotenv from 'dotenv';
import passport from 'passport';
import authRoutes from './auth/routes.ts';
import sessionConfig from './config/session.ts';
import cors from 'cors';

dotenv.config();
import './auth/passport.ts'; // Ensure passport strategies are loaded
const app = express();

app.use(cors({
  origin: 'http://localhost:5173', // frontend port
  credentials: true,
}));

app.use(express.json());
app.use(sessionConfig);
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoutes);
// Example protected route

app.get('/profile', (req, res) => {
    if (req.isAuthenticated && req.isAuthenticated()) {
        res.json(req.user);
    } else {
        res.sendStatus(401);
    }
});

app.listen(3000, () => {
console.log('Server running on http://localhost:3000');
});
