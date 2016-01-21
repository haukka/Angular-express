var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.redirect('/todolist');
});

router.get('/todolist', function(req, res, next) {
  res.render('todo', { title: 'todo' });
});

router.get('/clipmotion', function(req, res, next) {
  res.render('clip', { title: 'motion' });
});

router.get('/chat_socket', function(req, res, next) {
  res.render('chat', { title: 'chat' });
});

module.exports = router;
