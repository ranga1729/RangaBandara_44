const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    title: String,
    description: String,
    ingredients: String,
    instructions: String,
    timeToCook: String,
    author: String
});

module.exports = mongoose.model('Recipe', recipeSchema);
