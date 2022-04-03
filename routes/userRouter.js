const express = require('express');
const userCtrl = require('../controllers/userCtrl');
const router = express.Router();

router.post('/signup', userCtrl.register);
router.post('/signin', userCtrl.signin)
router.get('/', userCtrl.getUsers);
router.delete('/:email', userCtrl.deleteUsers);

module.exports = router;