const mongoose = require('mongoose');

const Job = new mongoose.Schema({
  job_title: { type: String, required: true },
  company: { type: String, required: true },
  required_skills: { type: [String], required: true },
  location: { type: String, required: true },
  job_type: { type: String, required: true },
  experience_level: { type: String, required: true }
});

const Job1 = mongoose.model('Job', Job);
module.exports = Job1;
