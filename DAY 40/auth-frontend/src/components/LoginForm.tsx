import { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import api from '../services/api';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { refreshUser } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post('/login', { email, password });
      await refreshUser();
      navigate('/profile');
    } catch {
      alert('Login failed');
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = import.meta.env.VITE_API_BASE_URL + '/auth/google';
  };

  return (
    <Box component="form" onSubmit={handleLogin}>
      <Typography variant="h5">Login</Typography>
      <TextField label="Email" fullWidth margin="normal" value={email}
        onChange={(e) => setEmail(e.target.value)} required />
      <TextField label="Password" type="password" fullWidth margin="normal"
        value={password} onChange={(e) => setPassword(e.target.value)} required />
      <Button type="submit" variant="contained" fullWidth>Login</Button>
      <Button onClick={handleGoogleLogin} variant="outlined" fullWidth sx={{ mt: 2 }}>
        Login with Google
      </Button>
    </Box>
  );
}
