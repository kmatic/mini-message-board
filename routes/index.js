var express = require('express');
var router = express.Router();

const messages = [
  {
    text: 'HOLA!',
    user: 'Kris',
    added: new Date()
  },
  {
    text: 'Greetings, good sir!',
    user: 'Sammi',
    added: new Date()
  },
  {
    text: 'dasiojndiasdnasjkdna',
    user: 'YERR',
    added: new Date()
  },
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('form', { title: 'Mini Messageboard'});
});

router.post('/new', function(req, res, next) {
    messages.push({text: req.body.text, user: req.body.user, added: new Date()});
    res.redirect('/');
});

module.exports = router;
