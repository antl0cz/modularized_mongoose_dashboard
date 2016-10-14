/**
 * Created by Ant on 10/13/16.
 */
// dependencies
var mongoose = require('mongoose');

// retrieving schema from model, named Animal
var Animal = mongoose.model('Animal');

// require the path to the animals.js file in the controller directory
var animals = require('../controllers/animals');

module.exports = function (app) {
    // index page route that also display current animals in the data page
    app.get('/', function (req, res) {
        animals.index(req, res)
    });

    // route to render page to input new animals
    app.get('/animals/new', function (req, res) {
        res.render('new')
    });

    // route to add a new animal to the DB and redirect to the index page
    app.post('/animals', function (req, res) {
        animals.create(req, res)
    });

    // route to delete an animal from the DB
    app.get('/animals/:id/destroy', function (req, res) {
        animals.destroy(req, res)
    });

    // route to render edit page and pass that animals info into the input fields
    app.get('/animals/:id/edit', function (req, res) {
        animals.edit(req, res)
    });

    // route to display that one animal's info
    app.get('/animals/:id/info', function (req, res) {
        animals.read(req, res)
    });

    // route to update animal information
    app.post('/animals/:id/update', function (req, res) {
        animals.update(req, res)
    });
}