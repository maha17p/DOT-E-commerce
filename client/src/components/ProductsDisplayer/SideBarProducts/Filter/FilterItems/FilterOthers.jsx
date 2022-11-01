import styled from "styled-components";
import { MdOutlineSort } from "react-icons/md";

import Filter from "../Filter";

const submitHandler = (value) => {
}


const FilterOthers = () => {
  return (
    <SWrapper>
      <Filter
        title="Filters"
        frontIcon={<MdOutlineSort />}
        otherFilterArr={otherFilterArr}
        onSubmit={submitHandler}
      />
    </SWrapper>
  );
};

const SWrapper = styled.div``;

const otherFilterArr = [
  {
    id: 1,
    name: "Shirt",
    value: "shirt",
  },
  {
    id: 2,
    name: "T-Shirt",
    value: "tshirt",
  },
  {
    id: 3,

    name: "Pant",
    value: "pant",
  },
  {
    id: 4,

    name: "Others",
    value: "other",
  },
];

export default FilterOthers;
