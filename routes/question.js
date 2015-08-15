var express = require('express');
var router = express.Router();

/* Create a new question */

router.get('/', function(req, res, next) {
  res.render('question', { title: 'Karmaflow' });
});

router.get('/:questionId', function (req, res, next) {
  res.render('question', {title:'Karmaflow',
  questionId: req.params.questionId });
})

module.exports = router;
