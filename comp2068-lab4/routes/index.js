var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lab 4' });
});
/* GET Mother's page. */
router.get('/sudesh', function (req, res, next) {
    res.render('sudesh', { title: 'Sudesh' });
});
/* GET dad's page. */
router.get('/sushil', function (req, res, next) {
    res.render('sushil', { title: 'Sushil' });
});
/* GET sister's page. */
router.get('/Priyanka', function (req, res, next) {
    res.render('priyanka', { title: 'Priyanka' });
});
module.exports = router;
