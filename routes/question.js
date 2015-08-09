var express = require('express');
var router = express.Router();

/* Show an specific question */
router.get('/', function(req, res, next) {
  res.render('question', { title: 'Karmaflow' });
});

module.exports = router;