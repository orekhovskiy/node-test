var express = require('express');
var router = express.Router();

var entryService = require('../services/entry.service')

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

router.post('/save', async function(req, res, next) {
  let entry = new Object();
  for (let val of accessNames) {
    entry[val] = req.body[val];
  }
  let val = JSON.parse(JSON.stringify(indexValues));
  val.saveResult = new Object();
  try {
    let result = await entryService.saveEntry(entry);
    val.saveResult.data = result;
    val.saveResult.success = true;
    res.status(200).render('index', val);
  }
  catch (e) {
    val.saveResult.success = false;
    val.saveResult.data = e;
    res.status(500).render('index', val);
  }
    
});

module.exports = router;
