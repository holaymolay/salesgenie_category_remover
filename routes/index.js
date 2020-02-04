#!/usr/bin/env node

const express = require('express');
const ecsv = require('express-csv');
var bodyParser = require("body-parser");
const compression = require('compression');
const CSV = require('csv-string')
const csvCat = require('../lib/category.js');
const Fs = require('fs')

var router = express.Router();
var categoryHeaders = csvCat.extractHeaders();

function writeToFile(data, path) {
  const json = JSON.stringify(data, null, 2)

  Fs.writeFile(path, json, (err) => {
    if(err) {
      console.error(err)
      throw err
    }

    console.log('Saved discarded categories to file.')
  })
}

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

  let categoryValues = JSON.parse(req.body.categoryValues)

  let categoriesToKeep = categoryValues.keep;
  let categoriesToDiscard = categoryValues.discard;
  let fileLabel = categoryValues.label;

  /* log discarded categories to file */
  let filePath = './log/discarded_categories/' + fileLabel + Date.now() + '.json';
  writeToFile(categoriesToDiscard, filePath)

  let newCSV = csvCat.createNewCSV(categoriesToKeep);
  newCSV.unshift(categoryHeaders);

  res.attachment(fileLabel + '(CLEAN).csv');
  res.csv(newCSV);
});

module.exports = router;
