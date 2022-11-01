import React from "react";
import styled from "styled-components";
import Filter from "../Filter";
import {AiOutlineStar} from  'react-icons/ai'

const onSubmitHandler = async (categoryData) => {
  console.log(categoryData);
};


const FilterRatings = () => {
  return (
    <SWrapper>
      <Filter
        title="Ratings"
        frontIcon={<AiOutlineStar />}
        ratingsArr={ratingsArr}
        onSubmit={onSubmitHandler}
      />
    </SWrapper>
  );
};

const ratingsArr = [ 
  {
    id: 5,
    rating: 5,
    value: 5,
    icon: <AiOutlineStar />,
  },
  {
    id: 4,
    rating: 4,
    value: 4,
    icon: <AiOutlineStar />,
  },
  {
    id: 3,
    rating: 3,
    value: 3,
    icon: <AiOutlineStar />,
  },
  {
    id: 2,
    rating: 2,
    value: 2,
    icon: <AiOutlineStar />,
  },
  {
    id: 1,
    rating: 1,
    value: 1,
    icon: <AiOutlineStar />,
  },


];

const SWrapper = styled.div``;

export default FilterRatings;
