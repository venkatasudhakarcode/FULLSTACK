const express = require('express');
const router = express.Router();
const postController = require('../controllers/post.controller');


//router.get('/', userController.getAllUsers); 
router.get('/posts', postController.getPosts);

module.exports = router;