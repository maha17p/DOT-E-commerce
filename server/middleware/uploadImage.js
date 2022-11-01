const fs = require("fs");
const { BadRequestError } = require("../error");
const asyncWrapper = require("./asyncWrapper");

const uploadImg = asyncWrapper(async (req, res, next) => {
  if (!req.files || Object.keys(req.files).length === 0)
    return next(BadRequestError("No files were uploaded"));
  const file = req.files.file;

  // if (file.size > 1024 * 1024) {
  //   removeTmp(file.tempFilePath);
  //   return next(createCustomError("Size too large", 400));
  // }

  if (file.mimetype !== "image/jpeg" && file.mimetype !== "image/png") {
    removeTmp(file.tempFilePath);
    return next(BadRequestError("File format is incorrect"));
  }
  next();
});

const removeTmp = (path) => {
  fs.unlink(path, (err) => {
    if (err) throw err;
  });
};

module.exports = { uploadImg };
