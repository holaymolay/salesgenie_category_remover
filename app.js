#!/usr/bin/env node

const csvCat = require('./lib/category.js');

var categoryArray = csvCat.extractAllCategories();
console.log(categoryArray);



console.log(categoryArray)
var uniqueArray = categoryArray.filter(function(elem, pos) {
                    return categoryArray.indexOf(elem) == pos;
                  })

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
