var router = require('express').Router();
var Category = require('../models/category');
var Product = require('../models/product');
var fs = require('fs');
var im = require('imagemagick');
var faker = require('faker');

router.get('/add-category', function(req, res, next) {
  res.render('admin/add-category', { message: req.flash('success') });
});

router.post('/add-category', function(req, res, next) {
  var category = new Category();
  category.name = req.body.name;
  category.save(function(err) {
    if (err) return next(err);
    req.flash('success', 'Successfully added a category');
    return res.redirect('/add-category');
  });
});

router.get('/add-product', function(req, res, next) {
  res.render('admin/add-product', { message: req.flash('success') });
});

router.post('/add-product', function(req, res, next) {
  var product = new Product();
  var imageName = "jaja.jpg"; //req.files.image.name;
  var imgPath = faker.image.image();//__dirname + "/data/products/" + imageName;
  poduct.name = req.body.name;
  product.price = req.body.price;
  product.image = imgPath;
  product.category = req.body.category;
  product.save(function(err) {
    if (err) return next(err);
      /*im.resize({
        srcPath: req.files.image.path,
        dstPath: imgPath,
        width: 0,
      });*/
    req.flash('success', 'Successfully added a product');
    return res.redirect('/add-product');
  });
});

module.exports = router;
