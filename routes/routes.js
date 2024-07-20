const express = require('express');
const createUser = require('../controller/apiController');
const upload = require('../middleware/file_upload');

const router = express.Router()
 router.post('/createUser',upload.fields([{ name: 'document', maxCount: 1 }, { name: 'profile', maxCount: 1 }]), createUser);
 module.exports = router;