#!/usr/bin/env node
const fs = require('fs');
const CSV = require('csv-string')

const filePath = "./tmp/";
const inputFile = "input.csv";

const file = filePath + inputFile;

// working

var contents = fs.readFileSync(file, 'utf8');

// working

const csvArray = CSV.parse(contents);
const categoryColumHeader = "Primary SIC Code Description";
const categoryArrayHeaderIndex = HI = 0;

// working

const categoryIndex = csvArray[categoryArrayHeaderIndex]
                        .indexOf(categoryColumHeader);

// working

var extractCategory = (csvLineIndex, lineItemIndex) => {
  return csvArray[csvLineIndex][lineItemIndex];
};

// working

var extractAllCategories = () => {
  let categoryArray = new Array();

  for(i=0; i<csvArray.length; i++){
    categoryArray.push(extractCategory(i, categoryIndex));
  }
  return categoryArray;
};

var categoryArray = extractAllCategories();

var uniqueArray = categoryArray.filter(function(elem, pos) {
                    return categoryArray.indexOf(elem) == pos;
                  })

// working
console.log(uniqueArray);
/*

1. upload .csv file (exported from sales genie)
2. compile array of unique category names from .csv
3. display list
  - via html
  - make items selectable
  - display sidebar with saved presets
  - on submit, ask to save category list as a preset
4. produce csv and display download link
5. if preset exists & is selected, only display categories that are previously unknown
  - on submit, ask to update preset

*/
