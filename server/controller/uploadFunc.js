const cloudinary = require('cloudinary')
const fs = require('fs');
const {  BadRequestError } = require('../error');
const asyncWrapper = require("../middleware/asyncWrapper");


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key:process.env.CLOUD_API_KEY,
    api_secret:process.env.CLOUD_API_SECRET
})

const uploadAvatar = asyncWrapper(async(req,res,next) =>{
    const file = req.files.file;

    cloudinary.v2.uploader.upload(file.tempFilePath, {
        folder:'avatar',width:150, height:150, crop:"fill"
    },async(err,result) => {
        if(err) throw err; 
        removeTmp(file.tempFilePath)

        res.json({public_id:result.public_id,url:result.secure_url})
    })
});


const destroyAvatar = asyncWrapper(async(req,res,next) => {
    const {public_id} = req.body;
    if(!public_id) return next(new BadRequestError(`No Images Selected`))

    cloudinary.v2.uploader.destroy(public_id,async(err,result) => {
        if (err) throw err;
        res.json("Deleted Image")
    })
})


const removeTmp = (path) => {
    fs.unlink(path, (err) => {
      if (err) throw err;
    });
  };
  

module.exports = {
    uploadAvatar,
    destroyAvatar
}
