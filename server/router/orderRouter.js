const express = require('express');

const router  = express.Router();
const verifyUser = require('../middleware/verifyUser')
const verifyAdmin = require('../middleware/verifyAdmin')

const {getAllOrders,createOrders, getUserOrder,getSingleOrder, updateOrder,deleteOrder} = require('../controller/orderFunc');


router.route('/').get(getAllOrders).post(verifyUser,createOrders);
router.route('/user_order').get(verifyUser,getUserOrder)
router.route('/:id').get(verifyUser,getSingleOrder).put(updateOrder).delete(deleteOrder)
module.exports = router;  