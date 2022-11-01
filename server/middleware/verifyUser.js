const jwt = require("jsonwebtoken");
const { BadRequestError } = require("../error");
const { accessTokenValidator } = require("../helper/token");
const asyncWrapper = require("./asyncWrapper");

const verifyUser = asyncWrapper(async(req,res,next) => {
    const token = req.header("Authorization");
    if(!token) return res.status(400),json({msg:"Invalid Authentication"})

    const user = await accessTokenValidator(token);
    if(!user) return next(new BadRequestError("Invalid Authentication"));
    req.user = user
    next()
});

module.exports = verifyUser;