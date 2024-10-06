const mongoose = require('mongoose');

const User = new mongoose.Schema({
  name: { type: String, required: true },
  skills: { type: [String], required: true },
  experience_level: { type: String, required: true },
  preferences: {
    desired_roles: { type: [String], required: true },
    locations: { type: [String], required: true },
    job_type: { type: String, required: true }
  }
});

const U1 = mongoose.model('User', User);
module.exports = U1;
