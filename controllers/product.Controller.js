const { product, category } = require('../database/models');

module.exports = {
  index: async (req, res) => {
    const products = await product.findAll();
    res.render('products/index', { products });
  },

  create: async (req, res) => {
    const categories = await category.findAll();
    res.render('products/create', { categories });
  },

  store: async (req, res) => {
    await product.create(req.body);
    res.redirect('/products');
  },

  detail: async (req, res) => {
    const prod = await product.findByPk(req.params.id);
    res.render('products/detail', { product: prod });
  },

  edit: async (req, res) => {
    const prod = await product.findByPk(req.params.id);
    const categories = await category.findAll();
    res.render('products/edit', { product: prod, categories });
  },

  update: async (req, res) => {
    await product.update(req.body, { where: { id_producto: req.params.id } });
    res.redirect('/products/' + req.params.id);
  },

  destroy: async (req, res) => {
    await product.destroy({ where: { id_producto: req.params.id } });
    res.redirect('/products');
  },

  search: async (req, res) => {
    const searchTerm = req.query.q;
    const products = await product.findAll({
      where: {
        nombre: {
          [Op.like]: `%${searchTerm}%`
        }
      }
    });
    res.render('products/index', { products });
  }
};
