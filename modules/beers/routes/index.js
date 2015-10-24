var express = require('express');
var router = express.Router();
var Controller = require('./../controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  Controller.list(req, res);
  //res.render('list', { title: 'Listagem de cervejas' });
});
router.get('/:id', function(req, res, next) {
  Controller.view(req, res);
});

module.exports = router;
