var express = require('express');
const { re } = require('semver');
var router = express.Router();
const controler = require('../conroller/controler');
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/insert',insert)
router.get('/getusers', getdata)
router.post("/updatedata",update)
router.post('/delete',deleteuser)

module.exports = router;
