#!/usr/bin/env node

var express = require('express');
var router = express.Router();
const csvCat = require('../lib/category.js');

//Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/', function(req, res) {
  var categoryArray = csvCat.extractAllCategories();
  res.render('index', { categories: categoryArray });
});

module.exports = router;
