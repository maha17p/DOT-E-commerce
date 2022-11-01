import styled from "styled-components";

import { BiCategoryAlt, BiCategory } from "react-icons/bi";
import Filter from "../Filter";
import { useSelector, useDispatch } from "react-redux";
import { getValue } from "../../../../../app/feature/productSlice";
import { useEffect,useState } from "react";

const FilterCategory = () => {
  const { category } = useSelector((store) => store.category);
  const dispatch = useDispatch()
  const onSubmitHandler = async (categoryData) => {
    console.log(categoryData);
    const value = `/api/v1/products?category=${categoryData}`
    dispatch(getValue(value))
  };


  return (
    <SWrapper>
      <Filter
        title="category"
        frontIcon={<BiCategoryAlt />}
        category={category}
        onSubmit={onSubmitHandler}
      />
    </SWrapper>
  );
};

const SWrapper = styled.div``;

export default FilterCategory;
