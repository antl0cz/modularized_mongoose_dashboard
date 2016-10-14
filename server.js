/**
 * Created by Ant on 10/13/16.
 */
// the dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// store express app into app variable
var app = express();

// use bodyParser to parse form data sent via HTTP POST
app.use(bodyParser.urlencoded({ extended: true}));

// set static folder directory
app.use(express.static(path.join(__dirname, './client/static')));

// server to locate views and know what template engine is being used
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

// require the mongoose_setup.js file from the config directory inside server
require('./server/config/mongoose_setup');

// require and store routes.js file inside route_setter variable
var route_setter = require('./server/config/routes');

// use route setter variable with "app" variable tp speak to routes.js file
route_setter(app);

app.listen(8000, function () {
    console.log('running on 8000!');
})