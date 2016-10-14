/**
 * Created by Ant on 10/13/16.
 */
// dependencies
var mongoose = require('mongoose');

// retrieving schema from model, named Animal
var Animal = mongoose.model('Animal');

module.exports = {
    // controller methods
    index: function (req, res) {
        Animal.find({}, function (err, animals) {
            var data = {};
            animals.forEach(function (animal) {
                data[animal.name] = animal;
            })
            res.render('index', {animal: data});
        })
    },

    // method to create new animal
    create: function (req, res) {
        var animal = new Animal({name: req.body.name, age: req.body.age, type: req.body.type});

        animal.save(function (err) {
            if(err){
                console.log('something went wrong, remember name = string, age = number, type = string');
            }
            else{
                console.log('Nice!');
                res.redirect('/');
            }
        })
    },

    // method to delete animal from the database
    destroy: function (req, res) {
        Animal.remove({_id: req.params.id}, function (err, animal) {
            if(err){
                console.log("it didn't work ='(");
            }
            else{
                console.log('bye bye animal');
                res.redirect('/');
            }
        })
    },

    // method to have pass animal information when going to edit page
    edit: function (req, res) {
        Animal.findOne({_id: req.params.id}, function (err, animal) {
            res.render('edit', {animal: animal});
        })
    },

    // method to read animal information
    read: function (req, res) {
        Animal.findOne({_id: req.params.id}, function (err, animal) {
            res.render('info', {animal: animal});
        })
    },

    update: function (req, res) {
        Animal.update({_id: req.params.id}, {name: req.body.name, age: req.body.age, type: req.body.type}, function () {
            console.log('it updated, back to the index page!');
            res.redirect('/');
        })
    }
}