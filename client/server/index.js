import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// dummy user for testing
const USER = {
  email: 'test@example.com',
  password: 'password123',
};

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;

  if (email === USER.email && password === USER.password) {
    return res.json({ message: 'Login success' });
  }

  return res.status(401).json({ message: 'Invalid email or password' });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Auth server running on http://localhost:${PORT}`);
});
