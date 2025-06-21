import express from 'express';

const router = express.Router();

// Route test
router.get('/', (req, res) => {
  res.send('Events route is working!');
});

// API example for event
router.get('/hello', (req, res) => {
  res.json({ message: 'Hello from events route!' });
});

export default router;
