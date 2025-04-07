const {Product} = require('../models')
module.exports.renderProfile = async (req, res) => {
    const product = await Product.findByPk(
        req.params.id
    );
    res.render('products/profile', {product});
}