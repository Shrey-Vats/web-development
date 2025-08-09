import { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import api from '../services/api';

export default function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await api.post('/register', { email, password });
      alert(`Registered: ${res.data.email}`);
    } catch {
      alert('Registration failed');
    }
  };

  return (
    <Box component="form" onSubmit={handleRegister}>
      <Typography variant="h5">Register</Typography>
      <TextField label="Email" fullWidth margin="normal" value={email}
        onChange={(e) => setEmail(e.target.value)} required />
      <TextField label="Password" type="password" fullWidth margin="normal"
        value={password} onChange={(e) => setPassword(e.target.value)} required />
      <Button type="submit" variant="contained" fullWidth>Register</Button>
    </Box>
  );
}
