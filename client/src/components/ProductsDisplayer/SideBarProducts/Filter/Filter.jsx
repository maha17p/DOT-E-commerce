import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import {
  SBackIcon,
  SCategoryItem,
  SCategoryName,
  SDropDown,
  SFormContainer,
  SFront,
  SFrontIcon,
  SHeader,
  SInput,
  SItemContainer,
  SLabel,
  SOption,
  SSelect,
  STitle,
  SWrapper,
} from "./Filter.styled";
import { getProducts, getValue } from "../../../../app/feature/productSlice";
import { useRef } from "react";

const Filter = ({
  title,
  frontIcon,
  category,
  sortByArr,
  otherFilterArr,
  ratingsArr,
  onSubmit,
}) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState(false);
  const [sortByFilter, setSortByFilter] = useState(false);
  const [otherFilter, setOtherFilter] = useState(false);
  const [ratingsFilter, setRatingsFilter] = useState(false);


  const submitHandler = (value) => {
    onSubmit(value);
  };
  

  const filterOnChangeHandler = (value) => {
    const currIndex = checked.indexOf(value);
    const newChecked = [...checked];
    // currIndex === -1 ? newChecked.push(value) : newChecked.splice(currIndex,1)
    if (currIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currIndex, 1);
    }

    setChecked(newChecked);
  };
  useEffect(() => {
    submitHandler(checked)
  },[checked])

  const categoryFilterHandler = () => {
    setCategoryFilter(!categoryFilter);
    setSortByFilter(!sortByFilter);
    setOtherFilter(!otherFilter);
    setRatingsFilter(!ratingsFilter)
  };

  return (
    <SWrapper>
      <SFormContainer>
        <SHeader>
          <SFront>
            <SFrontIcon>{frontIcon}</SFrontIcon>
            <STitle>{title}</STitle>
          </SFront>
          <SBackIcon onClick={categoryFilterHandler}>
            {!categoryFilter ? <IoIosArrowForward /> : <IoIosArrowDown />}
          </SBackIcon>
        </SHeader>
        <SDropDown>
          <SCategoryItem>
            <SCategoryName>
              {categoryFilter &&
                category?.map(({ name,_id }, index) => {
                  return (
                    <SItemContainer key={index}>
                      <SInput
                        type="checkbox"
                        value={name}
                        name={name}
                        id={name}
                        // onClick= {() => clickHandler(setData(`category=${name}`))}
                        onChange={() => filterOnChangeHandler(name)}
                      />
                      <SLabel htmlFor={name}>{name}</SLabel>
                    </SItemContainer>
                  );
                })}
            </SCategoryName>
          </SCategoryItem>
          {sortByArr &&
            sortByFilter &&
            sortByArr?.map(({ name, value }, index) => {
              return (
                <SItemContainer key={index}>
                  <SInput
                    type="checkbox"
                    value={value}
                    name={name}
                    id={value}
                    // onChange={(e) => changeHandler(e)}
                  />
                  <SLabel htmlFor={value}>{name}</SLabel>
                </SItemContainer>
              );
            })}

          {otherFilterArr &&
            otherFilter &&
            otherFilterArr?.map(({ name, id, value }, index) => {
              return (
                <SItemContainer key={index}>
                  <SInput
                    type="checkbox"
                    value={value}
                    name={name}
                    id={value}
                    onChange={() => filterOnChangeHandler(name)}
                  />
                  <SLabel htmlFor={value}>{name}</SLabel>
                </SItemContainer>
              );
            })}
  {ratingsArr &&
            ratingsFilter &&
            ratingsArr?.map(({ rating, id,icon, value }, index) => {
              return (
                <SItemContainer key={index}>
                  <SInput
                    type="checkbox"
                    value={value}
                    name={rating}
                    id={value}
                    onChange={() => filterOnChangeHandler(rating)}
                  />
                  <SLabel htmlFor={value}>{rating} {icon} & above</SLabel>
                </SItemContainer>
              );
            })}

        </SDropDown>
      </SFormContainer>
    </SWrapper>
  );
};

export default Filter;
