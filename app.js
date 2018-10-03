#!/usr/bin/env node
const express = require("express");
const bodyParser = require("body-parser");
const compression = require('compression');

var app = express();
var port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(compression());
app.use(express.static("public"));
app.use('/modules', express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));

app.use(require('./routes/index'));

var server = app.listen(port, function () {
  console.log("\n/********************************************/");
  console.log('\tServer listening on port ' + port + '!');
  if(port == 3000){console.log('\thttp://localhost:3000/')};
  console.log("/********************************************/\n");
});



/*

1. [DONE] upload .csv file (exported from sales genie)
2. [DONE] compile array of unique category names from .csv
3. display list
  - via html [DONE]
  - make items selectable [DONE]
  - display sidebar with saved presets
  - on submit, ask to save category list as a preset
4. [DONE] produce csv and display download link
5. if preset exists & is selected, only display categories that are previously unknown
  - on submit, ask to update preset

*/
