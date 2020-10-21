var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('index', { title: 'CS412 PA3' });
});

router.get('/fixedString', function(req, res, next){
  res.render('fixedString', {string: 'hi'});
});

router.route('/postString')
    .post((req, res, next) => {
      res.render('postString', {string: req.body.string, length: req.body.string.length});
    })
module.exports = router;
