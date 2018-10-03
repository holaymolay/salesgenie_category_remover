#!/usr/bin/env node

const express = require('express');
const ecsv = require('express-csv');
var bodyParser = require("body-parser");
const compression = require('compression');
const CSV = require('csv-string')
const csvCat = require('../lib/category.js');

var router = express.Router();
var categoryHeaders = csvCat.extractHeaders();

//Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/', function(req, res) {
  var categoryArray = csvCat.extractAllCategories();
  res.render('index', { categories: categoryArray });
});

router.post('/clean-list', function(req, res) {
  //console.log(JSON.parse(req.body.categoryValues).keep);
  //console.log(CSV.stringify(csvArray));
  let categoriesToKeep = JSON.parse(req.body.categoryValues).keep;

  let newCSV = csvCat.createNewCSV(categoriesToKeep);
  newCSV.unshift(categoryHeaders);
  res.csv(newCSV);
});

module.exports = router;
