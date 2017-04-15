let express = require('express');

let users = require('../controllers/users/index');

let app= require('../app');

let router = express.Router();


router.get('/users',users.getUsers);

router.post('/users/create',users.createUser);







module.exports = router;
