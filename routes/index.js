var express = require('express');
var router = express.Router();
const ProductController = require('../controllers/ProductController.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/products/profile/:id', ProductController.renderProfile);
module.exports = router;