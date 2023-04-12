var expres = require('express');
const router = expres.Router();
const postController = require('../controllers/post.controller');

router.get('/posts', postController.getPosts);

module.exports = router;
