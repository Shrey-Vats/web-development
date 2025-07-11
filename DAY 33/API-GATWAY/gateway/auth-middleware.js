const jwt = require('jsonwebtoken');

const JWT_SECRET = 'your-secret-key';


export const authenticate = (req, res, next) => {
  if (req.path.startsWith('/auth')) return next(); // allow /auth/login, /auth/signup

  const authHeader = req.headers['authorization'];
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'No token provided' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; 
    next(); 
  } catch (err) {
    return res.status(403).json({ error: 'Invalid token' });
  }
};
