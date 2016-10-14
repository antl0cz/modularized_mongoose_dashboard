/**
 * Created by Ant on 10/13/16.
 */
// dependencies
var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');

// create connection to database
mongoose.connect('mongodb://localhost/animals_db');

// store models path into a variable
var models_path = path.join(__dirname, './../models');

// use fs with the models_path variable, and have a function search for all files in that directory with .js files
fs.readdirSync(models_path).forEach(function (file) {
    if(file.indexOf('.js') >= 0){
        require(models_path + '/' + file);
    }
})