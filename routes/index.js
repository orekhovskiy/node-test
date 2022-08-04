var express = require('express');
var router = express.Router();

let accessNames= [
  'first',
  'second',
  'third'
]

const indexValues = { 
  title: 'Save these values!',
  inputTextValues: accessNames,
  saveUrl: '/save'
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', indexValues);
});

router.post('/save', function(req, res, next) {
  for (let val of accessNames) {
    console.log(req.body[val]);
  }
  let val = JSON.parse(JSON.stringify(indexValues));
  val.saveResult = new Object();
  val.saveResult.success = true;
  val.saveResult.data = new Date();
  res.status(200).render('index', val)
});

module.exports = router;
