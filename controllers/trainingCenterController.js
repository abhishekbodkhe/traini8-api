const TrainingCenter = require('../models/trainingCenter');


// Controller function to create a new training center
async function createTrainingCenter(req, res) {
  try {
    const {
      centerName,
      centerCode,
      address,
      studentCapacity,
      coursesOffered,
      contactEmail,
      contactPhone
    } = req.body;

    const newCenter = await TrainingCenter.create({
      centerName,
      centerCode,
      address,
      studentCapacity,
      coursesOffered,
      contactEmail,
      contactPhone
    });

    res.status(201).json(newCenter);
  } catch (error) {
    console.error('Error creating training center:', error);
    res.status(500).json({ error: 'Failed to create training center' });
  }
}

// Controller function to get all training centers
async function getAllTrainingCenters(req, res) {
  try {
    const trainingCenters = await TrainingCenter.findAll();
    res.json(trainingCenters);
  } catch (error) {
    console.error('Error retrieving training centers:', error);
    res.status(500).json({ error: 'Failed to retrieve training centers' });
  }
}

module.exports = {
  createTrainingCenter,
  getAllTrainingCenters
};
