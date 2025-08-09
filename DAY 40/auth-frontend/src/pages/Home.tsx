import { Box, Container, Typography } from '@mui/material';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

export default function Home() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>Welcome</Typography>
      <Box my={4}>
        <LoginForm />
      </Box>
      <Box my={4}>
        <RegisterForm />
      </Box>
    </Container>
  );
}
