#!/usr/bin/env node

const fs = require('fs');
const CSV = require('csv-string')

const filePath = "./tmp/";
const inputFile = "input.csv";
const file = filePath + inputFile;

var contents = fs.readFileSync(file, 'utf8');
const csvArray = CSV.parse(contents);
const categoryColumHeader = "Primary SIC Code Description";
const categoryArrayHeaderIndex = HI = 0;

const categoryIndex = csvArray[categoryArrayHeaderIndex]
                        .indexOf(categoryColumHeader);


/* FUNCTIONS */

var extractCategory = (csvLineIndex, lineItemIndex) => {
  return csvArray[csvLineIndex][lineItemIndex];
};

var extractAllCategories = () => {
  let categoryArray = new Array();

  for(i=0; i<csvArray.length; i++){
    categoryArray.push(extractCategory(i, categoryIndex));
  }

  categoryArray = categoryArray.filter(function(elem, pos) {
    return categoryArray.indexOf(elem) == pos;
  });

  categoryArray.shift();
  categoryArray.sort();
  return categoryArray;
};


module.exports = {
  extractAllCategories: extractAllCategories
};
