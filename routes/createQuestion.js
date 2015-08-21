var express = require('express');
var router = express.Router();

/* Create a new question */
router.get('/', function(req, res, next) {
  res.render('createQuestion', { title: 'Karmaflow' });
});

module.exports = router;
