const express = require('express');
const jokeController = require('../Controllers/jokeController');
const authenticate = require('../Middleware/authenticate');
const router = express.Router();

router.get('/random-joke', authenticate, jokeController.getRandomJoke);

module.exports = router;
