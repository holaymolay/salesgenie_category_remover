#!/usr/bin/env node

const express = require('express');
var bodyParser = require("body-parser");
const compression = require('compression');
const csvCat = require('../lib/category.js');

var router = express.Router();

//Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/', function(req, res) {
  var categoryArray = csvCat.extractAllCategories();
  res.render('index', { categories: categoryArray });
});

router.post('/category', function(req, res) {
  //console.log(req.body.keep)
  //res.render('result', { results: categoryArray });
  //console.log(req.body.categoryValues);
  res.send(req.body.categoryValues);
});

module.exports = router;
