import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsSearch } from "react-icons/bs";
import { FiShoppingBag } from "react-icons/fi";
import { FiUserCheck, FiUserPlus } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import ProfileItems from "./ProfileItems/ProfileItems";

import { HiOutlineMenuAlt1 } from "react-icons/hi";
import {
  MobileNavBar,
  SCenter,
  SHeader,
  SHeaderFixed,
  SIcon,
  SIconContainer,
  SLogo,
  SMenuIcon,
  SNavbar,
  SNavbarLogo,
  SProfileLabel,
  SRight,
  SSearchBar,
  SSearchInput,
  SUserIcon,
  SZero,
} from "./Navbar.styled";
import SNav from "./SNav/SNav";
import CartItem from "../CartItem/CartItemIcon/CartItem";
import RecurssiveBar from "./RecurssiveBar";
import { HeaderHeight } from "../../styles/variable.styled";

const Navbar = () => {
  const [toggle, setToggle] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const { isLogged, user, isAdmin } = useSelector((store) => store.authUser);

  const menuHandler = () => {
    setToggle((prev) => !prev);
  };

  const showProfileHandler = () => {
    setShowProfile(prev => !prev)
  }


  return (
    <>
      <SNavbar>
        <HeaderHeight />
        <SHeaderFixed>
          <SHeader>
            <SMenuIcon onClick={menuHandler}>
              {toggle ? <IoMdClose /> : <HiOutlineMenuAlt1 />}
            </SMenuIcon>
            <SNavbarLogo to="/">
              <SLogo>
                d<SZero>0</SZero>t
              </SLogo>
            </SNavbarLogo>

            <SSearchBar>
              <BsSearch />
              <SSearchInput placeholder="search for products........." />
            </SSearchBar>
            <SCenter>
              <SNav />
            </SCenter>

            <SRight >
              <SUserIcon
              onClick={showProfileHandler}
              >
                <SIconContainer>
                  <SIcon>{!isLogged ? <FiUserPlus /> : <FiUserCheck />}</SIcon>
                  {!isLogged ? (
                    <SProfileLabel>login</SProfileLabel>
                  ) : (
                    <>
                      {isAdmin ? (
                        <SProfileLabel>HI ADMIN!</SProfileLabel>
                      ) : (
                        <SProfileLabel>HI {user.name}!</SProfileLabel>
                      )}
                    </>
                  )}
                </SIconContainer>
  
              {showProfile && <ProfileItems  /> }
              </SUserIcon>
              <CartItem />
            </SRight>
          </SHeader>
        </SHeaderFixed>
      </SNavbar>
      <MobileNavBar style={toggle ? { left: "0" } : {}}>
        <RecurssiveBar />
        {/* recusrive optimation */}
      </MobileNavBar>
    </>
  );
};

export default Navbar;
