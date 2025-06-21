// models/Job.js
const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: String,
  description: String,
  company: String,
  location: String,
});

module.exports = mongoose.model('Job', jobSchema);
