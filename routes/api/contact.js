const express = require('express');
const router = express.Router();
const contactCtrl = require('../../controllers/contact');

// GET all posts
router.get('/', contactCtrl.index)

// POST new post
router.post('/', contactCtrl.create)

module.exports = router;