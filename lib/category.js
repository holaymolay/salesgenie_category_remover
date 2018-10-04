#!/usr/bin/env node

const fs = require('fs');
const CSV = require('csv-string')

const filePath = "./tmp/";
const inputFile = "input.csv";
const file = filePath + inputFile;

var contents = fs.readFileSync(file, 'utf8');
const csvArray = CSV.parse(contents);

var arrayHeaderIndex = 0;

const categoryColumnHeader = "Primary SIC Code Description";
const categoryIndex = csvArray[arrayHeaderIndex].indexOf(categoryColumnHeader);

const businessColumnHeader = "Company Name";
const businessIndex = csvArray[arrayHeaderIndex].indexOf(businessColumnHeader);


/* FUNCTIONS */
var extractHeaders = () => {
  return csvArray[arrayHeaderIndex];
};

var extractFromList = (csvLineIndex, lineItemIndex) => {
  return csvArray[csvLineIndex][lineItemIndex];
};

var extractAll = () => {
  let listArray = new Array();
  //let businessArray = new Array();
  //let categoryArray = new Array();

  for(i=0; i<csvArray.length; i++){
    listArray.push( [ extractFromList(i, categoryIndex),
                      extractFromList(i, businessIndex) ])
  }

  listArray.shift();
  return listArray;
};

/******************* DEPRECATED ***************************
var extractAllCategories = () => {
  let categoryArray = new Array();

  for(i=0; i<csvArray.length; i++){
    categoryArray.push(extractFromList(i, categoryIndex));
  }

  categoryArray.filter(function(elem, pos) {
    return categoryArray.indexOf(elem) == pos;
  });

  categoryArray.shift();
  categoryArray.sort();
  return categoryArray;
};

**********************************************************/

var createNewCSV = (keep) => {
  let newCSV = new Array();

  for(i=0; i < csvArray.length; i++) {
    if(keep.includes(csvArray[i][categoryIndex])) {
      newCSV.push(csvArray[i]);
    }
  }

  return newCSV;
};

var getPresets = () => {
  return '';
};


module.exports = {
  //extractAllCategories: extractAllCategories,
  extractAll: extractAll,
  extractHeaders: extractHeaders,
  createNewCSV: createNewCSV,
  csvArray: csvArray,
  getPresets: getPresets
};
