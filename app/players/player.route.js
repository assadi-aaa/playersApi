const express = require('express');
const playerController = require('./player.controller');

const router = express.Router();

router.get('/', playerController.findAll);
router.get('/count', playerController.countPlayers);
router.get('/:id', playerController.findById);

module.exports = router;
