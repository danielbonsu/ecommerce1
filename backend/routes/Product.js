const express = require('express');
const router = express.Router();

router.get('/:id', async (req, res) => {
  const product = await ProductsModel.findById(
    req.params.id
  );
  if (product) {
    console.log(product);
    res.send(product);
  }
});

module.exports = router;
