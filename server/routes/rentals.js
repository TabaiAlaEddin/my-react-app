const express = require('express');
const rentalsController = require('../controller/rentalsController');
const router = express.Router();
const rentalController = require('../controller/rentalsController');


router.get('/', rentalController.getAll);
router.get('/:id', rentalsController.getRentalById);

module.exports = router;

