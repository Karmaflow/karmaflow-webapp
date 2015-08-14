var express = require('express');
var router = express.Router();

/* Questions page */

router.get('/', function(req, res, next) {
  res.render('questions', { title: 'Karmaflow' });
});

module.exports = router;
