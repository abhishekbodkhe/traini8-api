const express = require('express');
const router = express.Router();
const { createTrainingCenter, getAllTrainingCenters } = require('../controllers/trainingCenterController');

// POST endpoint to create a new training center
router.post('/training-centers', createTrainingCenter);

// GET endpoint to retrieve all training centers
router.get('/training-centers', getAllTrainingCenters);

module.exports = router;
