import express from 'express';
import User from '../models/User.js';
import Event from '../models/Event.js';
import Job from '../models/Job.js';
import { isAdmin } from '../middleware/auth.js';

const router = express.Router();

// جميع الراوتات محمية بالصلاحية ديال الأدمن
router.use(isAdmin);

// users routes
router.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

router.delete('/users/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ msg: 'User deleted' });
});

// organizations routes
router.get('/organizations', async (req, res) => {
  const orgs = await User.find({ role: 'organization' });
  res.json(orgs);
});

router.delete('/organizations/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ msg: 'Organization deleted' });
});

// events routes
router.get('/events', async (req, res) => {
  const events = await Event.find();
  res.json(events);
});

router.post('/events', async (req, res) => {
  const event = new Event(req.body);
  await event.save();
  res.json(event);
});

router.put('/events/:id', async (req, res) => {
  const updated = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

router.delete('/events/:id', async (req, res) => {
  await Event.findByIdAndDelete(req.params.id);
  res.json({ msg: 'Event deleted' });
});

// jobs routes
router.get('/jobs', async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

router.post('/jobs', async (req, res) => {
  const job = new Job(req.body);
  await job.save();
  res.json(job);
});

router.put('/jobs/:id', async (req, res) => {
  const updated = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

router.delete('/jobs/:id', async (req, res) => {
  await Job.findByIdAndDelete(req.params.id);
  res.json({ msg: 'Job deleted' });
});

export default router;
