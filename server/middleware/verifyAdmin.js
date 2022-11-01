const { UnAuthenticatedError } = require("../error");
const User = require("../model/authScheme");
const asyncWrapper = require("./asyncWrapper");


const verifyAdmin  = asyncWrapper(async(req,res,next) => {
    const user = await User.findOne({_id:req.user.id});
        if(user.role !== 1) return next(new UnAuthenticatedError("Admin resourcess denied"))
        next()
}) ;


module.exports = verifyAdmin;