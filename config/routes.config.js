const express = require('express');
const router = express.Router();
const posts = require('../controllers/posts.controller');
const users = require('../controllers/users.controller');
const secure = require('../middlewares/secure.middleware');

router.post('/posts', secure.auth, posts.create);
router.patch('/posts/:id', secure.auth, posts.patchOne);
router.delete('/posts/:id', secure.auth, posts.deleteOne);

router.get('/posts', secure.auth, posts.list);
router.get('/posts/:id', secure.auth, posts.getOne);

router.get('/users/:id/activate', users.activate);
router.post('/users', users.create);
router.post('/login', users.login);

module.exports = router;
