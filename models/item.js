const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/to-do')
const Schema = mongoose.Schema

const Item = new Schema({
  content: String,
  status: Boolean
})

module.exports = mongoose.model('Item', Item)
