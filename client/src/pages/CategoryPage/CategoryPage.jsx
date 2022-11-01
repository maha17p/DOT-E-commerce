import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {MdOutlineModeEdit, MdOutlineDelete} from 'react-icons/md'
import { getCategories, updateCategory } from "../../app/feature/categorySlice";
import EmptyNavbar from "../../components/EmptyNavbar/EmptyNavbar";
import {
  SBtnContainer,
  SCategory,
  SCategoryContainer,
  SCategoryItem,
  SDeleteBtn,
  SEditBtn,
  SForm,
  SFormContainer,
  SInput,
  SItem,
  SMainContainer,
  SSpan,
  SSubmitBtn,
  SSubmitBtnContainer,
  STitle,
  SWrapper,
} from "./CategoryPage.styled";

const CategoryPage = () => {
  const [form, setForm] = useState("");
  const { category, isEdit, setId } = useSelector((store) => store.category);
  const { token } = useSelector((store) => store.token);
  const dispatch = useDispatch();

  const getCategory = () => {
    dispatch(getCategories());
  };

  const editCategory = async (id, name) => {
    dispatch(updateCategory(id));
    setForm(name);
  };

  const deleteCategory = async (id) => {
    try {
      const resp = await axios.delete(`/api/v1/category/${id}`, {
        headers: { Authorization: token },
      });
      getCategory();
      return resp;
    } catch (error) {
      console.log(error);
    }
  };
  const sumbitFormHandler = async () => {
    try {
      if (isEdit) { 
        const resp = await axios.put(
          `/api/v1/category/${setId}`,
          { name: form },
          { headers: { Authorization: token } }
        );
        getCategory();
        setForm("");
        return resp;
      } else {
        const resp = await axios.post(
          "/api/v1/category",
          { name: form },
          { headers: { Authorization: token } }
        );
        getCategory();
        setForm("");
        return resp;
      }
    } catch (error) {
      console.log(error);
    }
  };
  const changeHandler = (e) => {
    setForm(e.target.value);
  };

  useEffect(() => {
    getCategory();
  }, [dispatch]);

  return (
    <SWrapper>
      <EmptyNavbar />
      <SCategory>
        <SFormContainer>
          <STitle>category manager</STitle>

          <SForm
            onSubmit={(e) => {
              e.preventDefault();
              sumbitFormHandler();
            }}
          >
            <SInput
              name="name"
              value={form}
              onChange={(e) => changeHandler(e)}
              placeholder="enter the category...."
            />
            <SSubmitBtnContainer>
              <SSubmitBtn>{!isEdit ? "Submit": "Update"}</SSubmitBtn>
            </SSubmitBtnContainer>
          </SForm>
        </SFormContainer>
        <SCategoryContainer>
          <SCategoryItem>
            {category?.map((item, index) => {
              return (
                <SMainContainer key={index}>
                  <SItem>{item?.name}</SItem>
                  <SBtnContainer>
                    <SEditBtn
                      onClick={() => editCategory(item?._id, item?.name)}
                    >
                      <MdOutlineModeEdit />
                      <SSpan>Edit</SSpan>
                    </SEditBtn>
                    <SDeleteBtn onClick={() => deleteCategory(item?._id)}>
                      <MdOutlineDelete />
                      <SSpan>delete</SSpan>
                    </SDeleteBtn>
                  </SBtnContainer>
                </SMainContainer>
              );
            })}
          </SCategoryItem>
        </SCategoryContainer>
      </SCategory>
    </SWrapper>
  );
};

export default CategoryPage;
