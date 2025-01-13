const multer = require('multer');
const upload = multer({ dest: 'temp-uploads/' });
const express = require('express');
const {
  createProductController,
  getProductDataController,
  updateProduct,
  getSingleProductDocument,
} = require('../controllers/product.controller.js');
const router = express.Router();

router.post(
  '/create-product',
  upload.array('files', 5),
  createProductController
);

router.get("/get_product",getProductDataController)
router.put("/update-products/:id",upload.array("files",5),updateProduct);
router.get("/get-single/:id", getSingleProductDocument)
module.exports = router;