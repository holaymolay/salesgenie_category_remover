#!/usr/bin/env node

const fs = require('fs');
const CSV = require('csv-string')

const filePath = "./tmp/";
const inputFile = "input.csv";
const file = filePath + inputFile;

var contents = fs.readFileSync(file, 'utf8');
const csvArray = CSV.parse(contents);
//console.log(CSV.stringify(csvArray));
const categoryColumHeader = "Primary SIC Code Description";
const categoryArrayHeaderIndex = HI = 0;

const categoryIndex = csvArray[categoryArrayHeaderIndex]
                        .indexOf(categoryColumHeader);


/* FUNCTIONS */
var extractHeaders = () => {
  return csvArray[0];
};

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

var createNewCSV = (keep) => {
  let newCSV = new Array();

  for(i=0; i < csvArray.length; i++) {
    if(keep.includes(csvArray[i][categoryIndex])) {
      newCSV.push(csvArray[i]);
    }
  }

  return newCSV;
};


module.exports = {
  extractAllCategories: extractAllCategories,
  extractHeaders: extractHeaders,
  createNewCSV: createNewCSV
};
