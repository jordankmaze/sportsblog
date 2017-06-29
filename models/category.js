var mongoose = require('mongoose');

//set schema
var categorySchema = mongoose.Schema({
  title : {type: String},
  description : {type: String},
  creted_at: {type: Date,  default: Date.now}
});

var Category = module.exports = mongoose.model('Category', categorySchema);

//Get Categories
module.exports.getCategories = function(callback, limit){
  Category.find(callback).limit(limit).sort([['title', 'ascending']]);
}

//Get Single Category
