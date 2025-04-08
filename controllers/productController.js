const {Product} = require('../models')
const categories = ['appliances', 'pets', 'home goods', 'other'];

module.exports.renderProfile = async (req, res) => {
    const product = await Product.findByPk(
        req.params.id
    );
    res.render('products/profile', {product});
}

module.exports.renderEditForm = async (req, res) => {
    const product = await Product.findByPk(
        req.params.id
    );
    res.render('products/edit', {product, categories});
}