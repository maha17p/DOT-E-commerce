const Order = require("../model/orderSchema");
const Products = require("../model/productSchema");
const asyncWrapper = require("../middleware/asyncWrapper");
const {  UnAuthenticatedError,  BadRequestError } = require("../error");




const createOrders = asyncWrapper(async (req, res, err) => {
  const {id} = req.user;
    const {
    shippingInfo,
    orderItems,
    paymentInfo,
    itemPrice,
    taxPrice,
    shippingPrice,
    totalPrice,

  } = req.body;

  const order = await Order.create({
    shippingInfo,
    orderItems,
    paymentInfo,
    itemPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    paidAt:Date.now(),
    user:id
  })

  res.status(201).json({ success:true, order})
});





const getUserOrder = asyncWrapper(async(req,res,err) => {
  const {id} = req.user;                                                                                                                                                                                     
  const singleUserOrder = await Order.find({user:id});
  res.status(200).json({success:true,length:singleUserOrder.length,singleUserOrder})

})


const getSingleOrder = asyncWrapper(async(req,res,err) => {
  const {id} = req.params;
  const singleOrder = await Order.findById(id).populate("user", "name email")
  if(! singleOrder) return next(new UnAuthenticatedError("Order not found"))
  res.status(200).json({success:true,length:singleOrder.length,singleOrder})


})

const getAllOrders = asyncWrapper(async (req,res,err) => {
  const allOrders = await Order.find()
  let totalAmount = 0;
  allOrders.forEach(item => totalAmount+=item.totalPrice)
  res.status(200).json({success:true,length:allOrders.length,totalAmount,allOrders})
})


const updateOrder = asyncWrapper(async(req,res,err) => {
  const {id} = req.params;
  const {status} = req.body;
  const findOrder = await Order.findById(id);

  if(findOrder.orderStatus === "Delivered") return next(new BadRequestError("Your Order has already delivered it"));
  findOrder.orderItems.forEach(async(item) => {
    await updateStock(item.quantity, item.product)
  })
  findOrder.orderStatus = status;
  if(status === "Delivered") {
    findOrder.deliverdAt = Date.now()
  }

  await findOrder.save({validateBeforeSave:false})
  res.json({success:true})
})

async function updateStock(quantity,id){
  const product = await Products.findById(id);
  product.stock = product.stock - quantity;
  await product.save({validateBeforeSave:false})
}



const deleteOrder = asyncWrapper(async(req,res,err) => {
  const {id} = req.params;
  const findProduct = await Order.findById(id);
  if(! findProduct) return next(new BadRequestError('Order not found in this id'))

  await findProduct.remove()
  res.status(200).json({success:true,msg:"Product is deleted"})
})


module.exports  = {
  getAllOrders,
  createOrders,
getUserOrder,
getSingleOrder,
updateOrder,
deleteOrder
}

