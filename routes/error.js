var express = require('express');
var router = express.Router();

/* Error page */
router.get('/', function(req, res, next) {
  res.render('error', { title: 'Karmaflow' });
});

module.exports = router;