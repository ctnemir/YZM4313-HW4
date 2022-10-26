const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const urlSchema = new Schema({
  hash: String,
  orginalUrl: String
});


const Url = mongoose.model('Urls', urlSchema);

module.exports = Url;