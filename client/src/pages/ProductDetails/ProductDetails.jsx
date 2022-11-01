import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import EmptyNavbar from "../../components/EmptyNavbar/EmptyNavbar";
import { SHeaderHeight } from "../../components/ProductsDisplayer/Products.styled";
import {
  AddCart,
  AddCartBtn,
  AddCartItem,
  BtnContainer,
  ByNow,
  CartCalculation,
  ContentContainer,
  DetailsContainer,
  ImageContainer,
  MainContainer,
  RemoveCartBtn,
  RemoveCartItem,
  SImage,
  SImg,
  SInput,
  SMain,
  SMinus,
  SName,
  SPlus,
  SPrice,
  SQuantity,
  SSize,
  SStock,
  SWrapper,
} from "./ProductDetails.styled";
import { child } from "../../assets";
import { HiMinusSm, HiOutlinePlus } from "react-icons/hi";
import { getProductDetails } from "../../app/feature/productDetailsSlice";
import { addToCart, decreaseCart, openCartNotify, removeCart } from "../../app/feature/cartSlice";
import RemoveNotification from "../../components/Notification/RemoveNotification/RemoveNotification";
import QuantityCalculation from "../../components/QuantityCalculation/QuantityCalculation";
import { getProducts } from "../../app/feature/productSlice";
import MainProducts from "../../components/ProductsDisplayer/MainProducts";

const ProductDetails = () => {
  const { singleProductDetails } = useSelector((store) => store.productDetails);
  const { products,value } = useSelector((store) => store.product);
  const { token } = useSelector((store) => store.token);
  const { id } = useParams();
  const dispatch = useDispatch()



  const filterProducts = products.filter((product) => {
    return product.category === singleProductDetails.category && product._id !== singleProductDetails._id
  })
  console.log(filterProducts);

  useEffect(() => {
    dispatch(getProducts(value))

    dispatch(getProductDetails({ id, token }));
  }, [id, token]);


  return (
    <SWrapper>
      <EmptyNavbar />
      <SHeaderHeight />
      <DetailsContainer>
        <ImageContainer>
          <SImage>
            <SImg src={child} />
          </SImage>
        </ImageContainer>
        <MainContainer>
          <ContentContainer>
            <SName>{singleProductDetails?.name}</SName>
            <SPrice>{singleProductDetails?.price}</SPrice>
            <SSize></SSize>
            {}
           <QuantityCalculation singleProductDetails = {singleProductDetails} />

            <SStock>In Stock</SStock>
          </ContentContainer>
          {/* <BtnContainer>
           
            <ByNow>By Now</ByNow>
          </BtnContainer> */}
        </MainContainer>
      </DetailsContainer>
      {products && filterProducts && <MainProducts products={filterProducts} />}
    </SWrapper>
  );
};

export default ProductDetails;
