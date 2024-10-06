const Job = require('../Models/JobModel');
const User = require('../Models/UserModel');

exports.createJobPosting = async (req, res) => {
  try {
    const newJob = new Job(req.body);
    await newJob.save();
    res.status(201).json({ message: 'Job posting created successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getJobRecommendations = async (req, res) => {
 
    try {
 
        const user = await User.findById(req.params.userId);
 
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const jobs = await Job.find();
        const recommendations = jobs
        .map(job => {
            const score = calculateJobScore(user, job);
            return { job, score };
        })
        .filter(rec => rec.score > 0)
        .sort((a, b) => b.score - a.score);

        res.json(recommendations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

function calculateJobScore(user, job) {
  
  let score = 0;

  const matchedSkills = job.required_skills.filter(skill => user.skills.includes(skill));
  score += matchedSkills.length * 10;

  if (user.experience_level === job.experience_level) {
    score += 20;
  }
  if (user.preferences.locations.includes(job.location)) {
    score += 15;
  }
  if (user.preferences.job_type === job.job_type) {
    score += 10;
  }

  return score;
}
