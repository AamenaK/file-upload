const express = require('express');
const userCtrl = require('../controllers/userCtrl');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');

const dir = './uploads';
if (!fs.existsSync(dir)) fs.mkdirSync(dir);

const storage = multer.diskStorage({
    destination: './uploads',
    filename: function (req, file, cb) {
        const uniqueToken = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const fileName = uniqueToken + '-' + file.originalname;
        req.resume = fileName;
        cb(null, fileName);
    }
});

const upload = multer({ storage: storage });

router.post('/signup', userCtrl.register);
router.post('/signin', userCtrl.signin)
router.get('/', userCtrl.getUsers);
router.delete('/:email', userCtrl.deleteUsers);
router.put('/:email', upload.single('resume'), userCtrl.update);

module.exports = router;