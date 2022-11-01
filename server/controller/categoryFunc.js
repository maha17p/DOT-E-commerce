const Category = require("../model/categorySchema");
const asyncWrapper = require("../middleware/asyncWrapper");
const {  BadRequestError,  UnAuthenticatedError } = require("../error");

const getCategories = asyncWrapper(async (req, res, next) => {
  const category = await Category.find();
  res.json({ category });
});

const createCategory = asyncWrapper(async (req, res, next) => {
  const { name } = req.body;

  //0-user 1-admin
  const findCategory = await Category.findOne({ name });
  if (findCategory)
    return next(new BadRequestError("This category is already exists"));
  const category = await Category.create({ name });
  res.status(201).json({ category });
});

const deleteCategory = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;
  const category = await Category.findOneAndDelete({ _id: id });
  if (!category) return next(new UnAuthenticatedError(`No Category with ${id}`));
  res.status(200).json({ category });
});

const updateCategory = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;
  const { name } = req.body;
  const category = await Category.findOneAndUpdate({ _id: id }, { name },{new:true});
  if (!category)
    return next(new UnAuthenticatedError(`No Category with ${name}`));
  res.status(200).json({ category });
});

module.exports = {
  getCategories,
  createCategory,
  deleteCategory,
  updateCategory,
};
