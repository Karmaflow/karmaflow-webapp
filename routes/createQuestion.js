var express = require('express');
var router = express.Router();

/* Create a new question */
router.get('/', function(req, res, next) {
  res.render('createQuestion', { title: 'Karmaflow' });
});

module.exports = router;

Materialize.toast('I am a toast!', 3000, 'rounded') // 'rounded' is the class I'm applying to the toast
