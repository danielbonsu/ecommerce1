const express = require('express');
const router = express.Router();
const ProductsModel = require('../models/Products');

router.get('/', async (req, res) => {
  const products = await ProductsModel.find({});

  res.status(200).send(products);
});

router.get('/product/:id', async (req, res) => {
  const product = await ProductsModel.findById(
    req.params.id
  );
  if (product) {
    res.send(product);
  }
});

module.exports = router;
