var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Save these values!',
    inputTextValues: [
      'first',
      'second',
      'third'
    ],
    saveUrl: '/save'
  });
});

module.exports = router;
