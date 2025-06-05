const { user } = require('../database/models');

module.exports = {
  create: (req, res) => {
    res.render('users/create');
  },

  store: async (req, res) => {
    await user.create(req.body);
    res.redirect('/users/' + req.body.email);
  },

   login: async (req, res) => {
    res.render('users/login');
  },

  register: async (req, res) => {
    res.render('users/register');
  },

  detail: async (req, res) => {
    const usuario = await user.findByPk(req.params.email);
    res.render('users/detail', { user: usuario });
  },

  edit: async (req, res) => {
    const usuario = await user.findByPk(req.params.email);
    res.render('users/edit', { user: usuario });
  },

  update: async (req, res) => {
    await user.update(req.body, { where: { email: req.params.email } });
    res.redirect('/users/' + req.params.email);
  }
};
