import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import axios from "axios";
import EmptyNavbar from "../../components/EmptyNavbar/EmptyNavbar";
import { SHeaderHeight } from "../../components/ProductsDisplayer/Products.styled";
import {
  BtnContainer,
  CategoryItem,
  ImageBack,
  ImageContainer,
  ImageFront,
  MainCreationContainer,
  ProductCreationContainer,
  ProductFormContainer,
  SBtnSubmit,
  SCloseIcon,
  SForm,
  SImg,
  SInput,
  SInputImage,
  SLabel,
  SMainItem,
  SOption,
  SSelect,
  STextArea,
  SUpload,
  Wrapper,
} from "./ProductCreattion.styled";
import { useRef } from "react";
import { child } from "../../assets";
import { getCategories } from "../../app/feature/categorySlice";

const prepareForm = (formArr) => {
  return formArr.reduce((prev, curr) => ({ ...prev, [curr.name]: "" }), {});
};

const ProductCreation = () => {
  const inputRef = useRef();
  const [showImages, setShowImages] = useState("");
  const data = prepareForm(productsArr);
  const formData = {...data,category:""}
  const [productForm, setProductForm] = useState(formData);
  console.log("ProductForm", productForm);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const { category } = useSelector((store) => store.category);
  const { token } = useSelector((store) => store.token);
  const { isLogged, user, isAdmin } = useSelector((store) => store.authUser);

  const imageUploadHandler = async (e) => {
    try {
      if (!isAdmin) return alert("You are not an admin");
      const file = e.target.files[0];
      if (file.type !== "image/jpeg" && file.type !== "image/png")
        return alert("File Format is not valid");
      let formData = new FormData();
      formData.append("file", file);
      setIsLoading(true);
      const data = await axios.post("/api/v1/file/upload_avatar", formData, {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: token,
        },
      });
      setIsLoading(false);
      setShowImages(data);
    } catch (error) {}
  };

  const imageDestroyHandler = async () => {
    try {
      if (!isAdmin) return alert("You are not an admin");
      await axios.post(
        "/api/v1/file/destroy_avatar",
        { public_id: showImages?.data?.public_id },
        {
          headers: { Authorization: token },
        }
      );
      setShowImages("");
    } catch (err) {}
  };

  const imageHandler = () => {
    if (inputRef && inputRef.current) {
      console.log("IT WORKS");
      inputRef.current.click();
    }
  };

  const inputChangeHandler = (e) => {
   setProductForm(prev => ({...prev, [e.target.name]: e.target.value,images: {...showImages?.data}}))

  }

const submitFormHandler = async () => {
  try{
    const res =  await axios.post('/api/v1/products',{...productForm})
    console.log(res)
  }catch(err){
    console.log(err);
  }
}
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  console.log("Show Images Data", showImages);
  return (
    <Wrapper>
      <EmptyNavbar />
      <SHeaderHeight />
      <MainCreationContainer>
        <ProductCreationContainer>
          <ImageContainer>
            <ImageFront onClick={imageHandler}>
              {showImages ? (
                <>
                  <ImageBack>
                    <SImg src={showImages?.data?.url} />
                  </ImageBack>
                  <SCloseIcon onClick={imageDestroyHandler}>
                    <IoMdClose />
                  </SCloseIcon>
                </>
              ) : (
                <>
                  <SInputImage
                    type="file"
                    ref={inputRef}
                    hidden
                    onChange={(e) => imageUploadHandler(e)}
                  />
                  <AiOutlineCloudUpload />
                  <SUpload>upload image</SUpload>
                </>
              )}
            </ImageFront>
          </ImageContainer>
          <ProductFormContainer >
            <SForm>
              <SMainItem>
                {productsArr.map(({ name, type, label }, index) => {
                  return (
                    <>
                      {type === "textarea" ? (
                        <STextArea
                          type={type}
                          placeholder={label}
                          value={productForm.name}
                          name={name}
                          rows="6"
                          onChange={(e) => inputChangeHandler(e)}
                        />
                      ) : (
                        <SInput
                          key={index}
                          placeholder={label}
                          name={name}
                          value={productForm.name}
                          type={type}
                          onChange={(e) =>inputChangeHandler(e)}

                        />
                      )}
                    </>
                  );
                })}
                <CategoryItem>
                  <SLabel htmlFor="category">category</SLabel>
                  <SSelect value={productForm.category} id="category" name="category" onChange ={(e) =>inputChangeHandler(e)}>
                    <SOption value=""> please select the category</SOption>
                    {category.map((item, index) => {
                      return (
                        <>
                          <SOption key={index} value={item.name}>
                            {item.name}
                          </SOption>
                        </>
                      );
                    })}
                  </SSelect>
                </CategoryItem>
              </SMainItem>
            </SForm>
          </ProductFormContainer>
          <BtnContainer onClick={submitFormHandler} >
            <SBtnSubmit>create product</SBtnSubmit>
          </BtnContainer>
        </ProductCreationContainer>
      </MainCreationContainer>
    </Wrapper>
  );
};

const productsArr = [
  {
    label: "product id",
    name: "product_id",
    type: "text",
  },
  {
    label: "title",
    name: "title",
    type: "text",
  },
 
  {
    label: "price",
    name: "price",
    type: "number",
  },
  {
    label: "description",
    name: "description",
    type: "textarea",
  },
  {
    label: "content",
    name: "content",
    type: "textarea",
  },
];

export default ProductCreation;
