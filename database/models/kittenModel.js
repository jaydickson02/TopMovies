
const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const kittenSchema = new Schema({
    name: String
})

module.exports =  mongoose.model('kittens', kittenSchema);

