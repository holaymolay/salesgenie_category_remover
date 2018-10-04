#!/usr/bin/env node

const express = require('express');
const ecsv = require('express-csv');
var bodyParser = require("body-parser");
const compression = require('compression');
const CSV = require('csv-string')
const csvCat = require('../lib/category.js');
const presets = require('../lib/presets.js');

var router = express.Router();
var categoryHeaders = csvCat.extractHeaders();

//Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/', function(req, res) {
  //var categoryArray = csvCat.extractAllCategories();
  //var businessArray = csvCat.csvArray;
  //var businessArray2 = csvCat.extractAll('businesses');
  //var categoryArray2 = csvCat.extractAll('categories');


  res.render('index', {
    list: csvCat.extractAll(),
    presets: csvCat.getPresets()
  });

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
