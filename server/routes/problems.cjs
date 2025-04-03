const express = require('express');
const router = express.Router();
const problemService = require('../services/problems.cjs');

// Fetch all problems
router.get('/', async (req, res) => {
  try {
    const problems = await problemService.getAll();
    res.status(200).json(problems);
  } catch (err) {
    console.error('\nError fetching problems:', err);
    res.status(500).json({ error: 'Failed to fetch problems' });
  }
});

// Create a problem
router.post('/', async (req, res) => {
  try {
    await problemService.insert({ ...req.body, username: req.user.username });
    res.status(201).json({ message: 'Problem created successfully' });
  } catch (err) {
    console.error('\nError creating problem:', err);
    res.status(500).json({ error: 'Failed to create problem' });
  }
});

// Update a problem
router.put('/:problemId', async (req, res) => {
    try {
        await problemService.update(req.params.problemId, req.body);
        res.status(200).json({ message: 'Problem updated successfully' });
    } catch (err) {
        console.error('\nError updating problem:', err);
        res.status(500).json({ error: 'Failed to update problem' });
    }
});

// Delete a problem
router.delete('/:problemId', async (req, res) => {
  try {
    const problemId = req.params.problemId;
    const result = await problemService.remove(problemId); // Using service function

    if (result.success) {
      res.status(200).json({
        success: true,
        message: `Problem with _id: ${problemId} deleted successfully.`,
      });
    } else {
      console.log(`\n${result.message}`);
      res.status(404).json({
        success: false,
        message: `No problem found with _id: ${problemId}.`,
      });
    }
  } catch (err) {
    console.error('\nError deleting problem:', err);
    res.status(500).json({ success: false, message: 'An error occurred while deleting the problem.' });
  }
});

module.exports = router;