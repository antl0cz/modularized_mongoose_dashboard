/**
 * Created by Ant on 10/13/16.
 */
// dependencies
var mongoose = require('mongoose');

// create animal schema and attach it as a model to database
var AnimalSchema = mongoose.Schema({
    name: String,
    age: Number,
    type: String,
    created_at: {type: Date, default: Date.now}
});

// setting schema in model as Animal
mongoose.model('Animal', AnimalSchema);