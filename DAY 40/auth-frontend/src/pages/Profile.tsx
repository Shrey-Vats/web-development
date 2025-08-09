import { useAuth } from '../context/AuthContext';
import { Container, Typography } from '@mui/material';

export default function Profile() {
  const { user } = useAuth();

  return (
    <Container maxWidth="sm">
      <Typography variant="h4">Your Profile</Typography>
      <Typography>Email: {user?.email}</Typography>
      <Typography>Provider: {user?.provider}</Typography>
    </Container>
  );
}
