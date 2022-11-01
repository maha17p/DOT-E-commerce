const Products = require("../model/productSchema");
const User = require("../model/authScheme");

const asyncWrapper = require("../middleware/asyncWrapper");
const {  BadRequestError } = require("../error");

const getSingleProduct = asyncWrapper(async (req, res, next) => {
  const {id} = req.params
  const products = await Products.findById({_id:id})
  //category=MenorWomenorKid
  res.status(200).json({ products });
});

const getAllProducts = asyncWrapper(async (req, res, next) => {
  const { title, price, name, category, checked, sold, numericFilters, sort, field } =
    req.query;

  const queryObject = {};

  // Filtering
  if (checked) {
    queryObject.checked = checked === "true" ? true : false;
  }
  if(name && name !== "all"){
    const data = {$in:name.split(",")};
    queryObject.name = data;
  }
  if (category && category !== "all") {
    const data = { $in: category.split(",") };
    queryObject.category = data;
  }
  if (title) {
    queryObject.title = { $regex: title, $options: "i" };
  }
  if (numericFilters) {
    const operatorMap = {
      ">": "$gt",
      ">=": "$gte",
      "<": "$lt",
      "<=": "$lte",
      "=": "$eq",
    };
    const regEx = /\b(<|>|>=|=|<=)\b/g;
    let filter = numericFilters.replace(
      regEx,
      (match) => `-${operatorMap[match]}-`
    );
    const options = ["price", "sold"];
    filter = filter.split(",").forEach((item) => {
      const [field, operator, value] = item.split("-");
      if (options.includes(field)) {
        queryObject[field] = { [operator]: Number(value) };
      }
    });
  }

  console.log(queryObject);

  let result = Products.find(queryObject);

  //Sorting
  // if (sort) {
  //   const sortList = sort.split(",").join(" ");
  //   console.log(sortList);
  //   result = result.sort(sortList);
  // } else {
  //   result = result.sort("createAt");
  // }
  if (sort === 'latest') {
    result = result.sort('-createdAt')
  }
  if (sort === 'oldest') {
    result = result.sort('createdAt')
  }

  if(sort ==='low' ){
    result = result.sort('price')
  }
  if(sort ==='high' ){
    result = result.sort('-price')
  }

  
  if (field) {
    const fieldList = field.split(",").join(" ");
    result = result.select(fieldList);
  }

  //Pagination
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  result = result.skip(skip).limit(limit);

  const products = await result;
  const totalProducts = await Products.countDocuments(queryObject)
  const numOfPages = Math.ceil(totalProducts / limit)
  res
    .status(200)
    .json({ status: "Success", totalProducts, numOfPages,products });
});

const createProduct = asyncWrapper(async (req, res, next) => {
  const {
    product_id,
    name,
    description,
    price,
    rating,
    images,
    category,
    stock,
    numOfReviews,
    reviews,
  } = req.body;
  if (!images) return next(new BadRequestError("No Image Upoaded"));
  const productFind = await Products.findOne({ product_id });
  console.log(productFind);
  if (productFind)
    return next(new BadRequestError("This product already exists"));

  const product = await Products.create({
    product_id,
    name,
    description,
    price,
    rating,
    images,
    category,
    stock,
    numOfReviews,
    reviews,
  });
  console.log(product);

  res.status(201).json({ product });
});

const deleteProduct = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;
  await Products.findOneAndDelete({ _id: id });
  res.json({ msg: `${id} is successfully deleted ` });
});

const updateProduct = asyncWrapper(async (req, res, next) => {
  const {
    product_id,
    title,
    price,
    description,
    content,
    images,
    category,
    checked,
    sold,
  } = req.body;
  const { id } = req.params;
  if (!images) return next(new BadRequestError("No Image Upoaded"));
  const products = await Products.findOneAndUpdate(
    { _id: id },
    {
      product_id,
      title: title.toLowerCase(),
      price,
      description,
      content,
      images,
      category,
    }
  );
  res.json({ msg: `${id} is Successfully updated` });
});

const createReview = asyncWrapper(async (req, res, err) => {
  const { id } = req.user;
  const { name } = await User.findById(id);
  const { rating, comment, productid } = req.body;

  const review = {
    user:id,
    name,
    rating,
    comment,
  };
  let sumRating = 0;
  const findProduct = await Products.findById({ _id: productid });
  const isReviewed = findProduct.reviews.find( item => item.user.toString() === id.toString())
  if(isReviewed){
    res.status(400).json({msg:"You have already reviewed"})
  }else{
    findProduct.reviews.push(review);
  }

findProduct.numOfReviews = findProduct.reviews.length
findProduct.reviews.forEach(item => {
  sumRating = sumRating + item.rating 
})
const avgRating = (Math.floor(sumRating / findProduct.reviews.length));
findProduct.rating = avgRating;
await findProduct.save()
res.status(201).json({findProduct})

});




const getProductReview = asyncWrapper(async(req,res,err) => {
  const {id} = req.params;
  const findProduct = await Products.findById({_id:id})
  if(! findProduct) return next(new BadRequestError("Products is not found"))
  res.status(200).json({success:true, reviews:findProduct.reviews})
})


const deleteReview = asyncWrapper(async(req,res,err) => {
  const productId  = req.params.id;
  const {reviewid} = req.query
  const findProduct = await Products.findById({_id:productId})
  if(! findProduct) return next(new BadRequestError("Products is not found"))
  const reviews  = findProduct.reviews.filter(item => item._id.toString() !== reviewid.toString());
  const numOfReviews = reviews.length
  let sumRating = 0;
  reviews.forEach(item => {
    sumRating = sumRating + item.rating 
  })
  const rating = (Math.floor(sumRating / reviews.length));
  const result = await Products.findOneAndUpdate({_id:productId}, {
    numOfReviews,
    rating,
    reviews
  })
  res.status(200).json({success:true, result })
})







module.exports = {
  getAllProducts,
  createProduct,
  deleteProduct,
  updateProduct,
  getSingleProduct,
  createReview,
  getProductReview,
  deleteReview
};
