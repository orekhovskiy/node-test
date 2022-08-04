var express = require('express');
var router = express.Router();

let accessNames= [
  'first',
  'second',
  'third'
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Save these values!',
    inputTextValues: accessNames,
    saveUrl: '/save'
  });
});

router.post('/save', function(req, res, next) {
  console.log(req.body);
  for (let val of accessNames) {
    console.log(req.body[val]);
  }
});

module.exports = router;
