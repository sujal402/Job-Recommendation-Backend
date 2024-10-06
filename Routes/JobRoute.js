const express = require('express');
const router = express.Router();
const { createJobPosting, getJobRecommendations } = require('../Controllers/JobController');

router.post('/', createJobPosting);
router.get('/recommendations/:userId', getJobRecommendations);

module.exports = router;
