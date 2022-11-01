const express = require('express');
const { getAllProducts,deleteProduct,createProduct,updateProduct, getSingleProduct, createReview, getProductReview, deleteReview } = require('../controller/productFunc');
const verifyAdmin = require('../middleware/verifyAdmin');
const verifyUser = require('../middleware/verifyUser');
const router = express.Router();



router.route('/').get(getAllProducts)
router.route('/:id').get(verifyUser,getSingleProduct)
router.route('/').post(verifyUser,verifyAdmin,createProduct)
router.route('/:id').delete(deleteProduct).put(updateProduct)
router.route('/review').post(verifyUser,createReview)
router.route('/review/:id').get(getProductReview).delete(deleteReview)
 

module.exports = router;
 