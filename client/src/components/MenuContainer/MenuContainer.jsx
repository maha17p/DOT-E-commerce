import React from "react";
import { GrRestroomMen } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import {SHeaderHeight } from "../../styles/variable.styled";

import {
  ProductsCategory,
  SCircle,
  SIcon,
  SIconContainer,
  SLabel,
  SRectangular,
} from "./MenuContainer.styled";

const MenuContainer = () => {
  const navigate = useNavigate()
  const categoryHandler = () => {
    navigate("/products?men")
  }
  return (
    <>
    <SIconContainer>
      {menuArr.map(({ label, link, icon }, index) => {
        return (
          // <ProductsCategory key={index} to={`/products/${link}`}>
            <SRectangular key={index} onClick={categoryHandler} >
              <SIcon>
                <SCircle>{icon}</SCircle>
                <SLabel>{label}</SLabel>
              </SIcon>
            </SRectangular>
          // </ProductsCategory>
        );
      })}
    </SIconContainer>
    </>
  );
};

const menuArr = [
  {
    label: "Men",
    link: "men",
    icon: <GrRestroomMen />,
  },
  {
    label: "women",
    link: "women",
    icon: <GrRestroomMen />,
  },
  {
    label: "kids",
    link: "kids",
    icon: <GrRestroomMen />,
  },
  {
    label: "offers",
    link: "offer",
    icon: <GrRestroomMen />,
  },
];

export default MenuContainer;
