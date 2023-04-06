const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


// All paths start with '/api/notes
router.post('/', notesCtrl.create);

module.exports = router
