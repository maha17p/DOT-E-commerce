import { useSelector } from "react-redux";
import EmptyNavbar from "../../components/EmptyNavbar/EmptyNavbar";
import { SHeaderHeight } from "../../components/ProductsDisplayer/Products.styled";
import {
  CategoryItem,
  CreateProductBtn,
  CreateProductContainer,
  FormContainer,
  ImageContainer,
  ProductContainer,
  SBtnContainer,
  SForm,
  SInput,
  SLabel,
  SMainItem,
  SOption,
  SSelect,
  STitle,
  Wrapper,
} from "./CreateProducts.styled";

const CreateProductsPage = () => {
  const { category } = useSelector((store) => store.category);

  return (
    <Wrapper>
      <EmptyNavbar />
      <SHeaderHeight />
      <ProductContainer>
        <CreateProductContainer>
          <ImageContainer>Image Container</ImageContainer>
          <FormContainer>
            <SForm>
              <SMainItem>
                {
                  productsArr.map(({name,value,type},index) => {
                    return (
                      <>
                      <SInput placeholder={name} type={type} />
                      </>
                    )
                  })
                }
                <CategoryItem>
                  <SLabel htmlFor="category">select category</SLabel>
                  <SSelect value="category" id="category" name="category">
                    <SOption value=""> please select the category</SOption>
                    {category.map((item, index) => {
                      return (
                        <>
                          <SOption key={index} value={item._id}>
                            {item.name}
                          </SOption>
                        </>
                      );
                    })}
                  </SSelect>
                </CategoryItem>
              </SMainItem>

              <SBtnContainer>
                <CreateProductBtn>create product</CreateProductBtn>
              </SBtnContainer>
            </SForm>
          </FormContainer>
        </CreateProductContainer>
      </ProductContainer>
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
    label: "color",
    name: "color",
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
    label: "description",
    name: "description",
    type: "textarea",
  },
  {
    label: "sold",
    name: "sold",
    type: "number",
  },
  {
    label: "sold",
    name: "sold",
    type: "number",
  },
  {
    label: "sold",
    name: "sold",
    type: "number",
  },
 
];

export default CreateProductsPage;
