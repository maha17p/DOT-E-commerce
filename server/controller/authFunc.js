const asyncWrapper = require('../middleware/asyncWrapper')
const User = require('../model/authScheme')
const validateEmail = require('../helper/emailValidation');
const { hashPassword, hashValidator } = require('../helper/hashPassword');
const { activationToken, activationTokenValidator, refreshToken, refreshTokenValidator, accessToken } = require('../helper/token');
const sendEmail = require('../helper/sendMail');
const {   BadRequestError } = require('../error');


const CLIENT_URL = process.env.CLIENT_URL;


const getUser = (req,res) => {
    res.send("APp is workinng")
};



const registerUser = asyncWrapper(async(req,res,next) => {
    const {name, email, password } = req.body;
    
    //validation
    if(!name || !email || !password) return next( new BadRequestError("Please fill in the all the fields")) //empty --> if(!false) --> if(true) --> return this block statement
    //string --> if(!true) --> if(false) --> go for next statement
    if(!validateEmail(email)) return next( new BadRequestError("Invalid email"));
    const userFind =  await User.findOne({email});
    if(userFind) return next( new BadRequestError("This email id is already existed"))
    if(password.length < 6) return next( new BadRequestError("Password must be at least 6 characters"))


    //hashpassword
    const hash = await hashPassword(password);

    //activationTokenGeneration
    const activation_token = await activationToken({name,email,hash});

    //send email for activating mail
    const url = `${CLIENT_URL}/user/activate/${activation_token}`;
    sendEmail(email,url,"Verify your email address")

    res.status(201).json({msg:"Register Success! Please activate your email to start"});
})

const activationEmail = asyncWrapper(async(req,res,next) => {
    const {activation_token} = req.body;
    const userValidation = await activationTokenValidator(activation_token);
    const {name,email,hash} = userValidation;
    const userFind = await User.findOne({email});
    if(userFind) return next( new BadRequestError("This email id is already existed"));
    await User.create({
        name,
        email,
        password:hash
    });
    res.status(201).json({msg:"Account has been activated"})
})


const loginUser = asyncWrapper(async(req,res,next) => {
    const {email, password } = req.body;

    const userFind = await User.findOne({email})
    if(!userFind) return next( new BadRequestError("This email id doesn't existed"));

    //password validation
    const passwordValidation = await hashValidator(password, userFind.password);
    console.log(passwordValidation);
    if(!passwordValidation) return next( new BadRequestError("Password is incorrect"))

    //creating refreshtoken
    const refresh_token = await refreshToken({id:userFind._id})

    //store refersh token in cookie
     res.cookie("refreshtoken",refresh_token, {
         httpOnly:true,
         path:"/api/v1/user/refresh_token",
         maxAge: 7 * 24 * 60 * 60 * 1000
     }) 
     
     res.status(200).json({msg:"Login Success!"})

})


const getAccessToken = asyncWrapper(async(req,res,next) => {
    const rf_token = req.cookies.refreshtoken;
    if(!rf_token) return next( new BadRequestError("Please Login Now!"));
    const userValidation = await refreshTokenValidator(rf_token);
    if(!userValidation) return next( new BadRequestError("Please Login Now!"));

    const access_token = await accessToken({id:userValidation.id});
    res.status(201).json({access_token})
});


const forgotPassword = asyncWrapper(async(req,res,next) => {
    const {email} = req.body;
    const userFind = await User.findOne({email});
    if(!userFind) return next( new BadRequestError("The Email id doesn't exist"));
    const access_token = await accessToken({id:userFind._id});

    const url  = `${CLIENT_URL}/user/reset/${access_token}`;
    sendEmail(email,url,"Reset Your Password");

    res.status(201).json({msg:"Reset your password, please check your email"})
    
})


const resetPassword = asyncWrapper(async(req,res,next) => {
    const {password} = req.body;
    const hash = await hashPassword(password)
    await User.findOneAndUpdate({_id:req.user.id},{password:hash})

    res.status(201).json({msg:"Password changed Successfully"})
})


const getUserInfo = asyncWrapper(async(req,res,next) => {
    const user = await User.findById(req.user.id);
    if(!user) return next( new BadRequestError("The email id doesn't exist"));
    res.status(200).json({user})
})


const getAlluserInfo = asyncWrapper(async(req,res,next) => {
    const user = await User.find().select("-password")
    res.status(200).json({user})

})

const logout = asyncWrapper(async(req,res,next) => {
    res.clearCookie("refreshtoken",{
        path:"/api/v1/user/refresh_token"
    });
    res.json({msg:"Logged out!"})
})


const updateUser  = asyncWrapper(async(req,res,next) => {
    const {name} = req.body;
    await User.findOneAndUpdate({_id:req.user.id},{
        name
    })
    res.json({msg:"Update Success!"})
})

const updateUserRole = asyncWrapper(async(req,res,next) => {
    const {role} = req.body;
    await User.findOneAndUpdate({_id:req.params.id},{
        role
    })
})

const deleteUser = asyncWrapper(async(req,res,next) => {
    await User.findOneAndDelete(req.params.id)
    res.json({msg:"Deleted Success!"})
})


module.exports = {
    getUser,
    registerUser,
    activationEmail,
    loginUser,
    getAccessToken,
    forgotPassword,
    resetPassword,
    getUserInfo,
    getAlluserInfo,
    logout,
    updateUser,
    updateUserRole,
    deleteUser
}