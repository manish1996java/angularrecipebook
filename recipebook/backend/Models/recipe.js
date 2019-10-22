const mongoose = require('mongoose');

const recipeschema = mongoose.Schema({
    title: {type:String} ,
    description: {type:String},
    imageUrl: {type:String}
})

module.exports = mongoose.model("Recipe",recipeschema);