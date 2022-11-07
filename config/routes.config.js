const express = require('express');
const router = express.Router();
const posts = require('../controllers/posts.controller')

router.post('/posts', posts.create);
router.patch('/posts/:id', posts.patchOne);
router.delete('/posts/:id', posts.deleteOne);

router.get('/posts', posts.list);
router.get('/posts/:id', posts.getOne);


module.exports = router;
