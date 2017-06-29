var express = require('express');
var router = express.Router();

Category = require('../models/Category.js');

router.get('/', function(req, res, next){
  Category.getCategories(function(err, categories){
    if (err) {
      res.send(err);
    } else {
      res.render('categories', {
        title: 'Categories',
        categories: categories
     });
    }
  });
});

router.post('/add', function(req, res){
	res.send('submitted form');
});

module.exports = router;
