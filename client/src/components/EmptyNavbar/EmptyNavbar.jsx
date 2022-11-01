import React from "react";
import CartItem from "../CartItem/CartItemIcon/CartItem";
import { SContainerRight, SLogo, SZero } from "../Navbar/Navbar.styled";
import { SCenter, SCenterLogo, SHeader, SHeaderFixed } from "./EmptyNavbar.styled";

const EmptyNavbar = () => {
  return (
      <SHeaderFixed>
        <SHeader>
          <SCenter>
            <SCenterLogo to="/">
              <SLogo>
                d<SZero>0</SZero>t
              </SLogo>
            </SCenterLogo>
          </SCenter>
          <CartItem />
        </SHeader>
      </SHeaderFixed>
  );
};

export default EmptyNavbar;
