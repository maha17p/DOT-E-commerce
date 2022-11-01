const express = require('express');
const { getCategories, createCategory, deleteCategory, updateCategory } = require('../controller/categoryFunc');
const router = express.Router();
const verifyUser = require('../middleware/verifyUser');
const verifyAdmin = require('../middleware/verifyAdmin')

router.route('/').get(getCategories);
router.route('/').post(verifyUser,verifyAdmin,createCategory)
router.route('/:id').delete(verifyUser,verifyAdmin,deleteCategory)
router.route('/:id').put(verifyUser,verifyAdmin,updateCategory)

module.exports = router;