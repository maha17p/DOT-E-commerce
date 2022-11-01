import React, { Fragment, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  IoMdArrowDropright,
  IoMdArrowDropdown,
  IoMdClose,
} from "react-icons/io";
import { flexCenter, fontSize, linkReset } from "../../styles/variable.styled";





const ChildLink = ({child}) => {
  const [toggle, setTogggle] = useState(false);
  const toggleHandler =() => {
    setTogggle(!toggle)
  }
  return (
    <>
    {child.map((item,index) => {
      return(
        <Fragment key={index}>
        {!item.child && <Item style={{paddingLeft:"1rem",fontSize:"0.75rem"}} to={item.link}>{item.name}</Item>}
       
      </Fragment>
      )
    })}
    </>
  )
}











const RecurssiveBar = ({ navArr }) => {
  const [dropDown, setDropDown] = useState(null);
  const openDropDownHandler = (label) => {
    if (label === dropDown) return setDropDown(null);
    setDropDown(label);
  };
  return (
    <Wrapper>
      <NavContainer>
        {navArr.map((item, index) => {
          const isOpen = dropDown === item.name;
          return (
            <Fragment key={index}>
              {!item.child && <Item to={item.link}>{item.name}</Item>}
              {item.child && (
                <ChildItem>
                  <Item to={item.link} isOpen={isOpen}>
                    {item.name}
                  </Item>
                  <Icons onClick={() => openDropDownHandler(item.name)}>
                    {isOpen ? <IoMdArrowDropdown /> : <IoMdArrowDropright />}
                  </Icons>
                </ChildItem>
              )}
              {isOpen && <ChildLink child={item.child} />}
            </Fragment>
          );
        })}
      </NavContainer>
    </Wrapper>
  );
};

export const Wrapper = styled.div``;
export const NavContainer = styled.div``;
export const NavItem = styled.div``;
export const ChildItem = styled.div`
  padding-right: 2rem;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  & > svg {
    font-size: ${fontSize.mdtfSpacing};
    cursor: pointer;
  }
`;
export const Item = styled(Link)`
  display: block;
  ${linkReset}
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: ${fontSize.mdLetterSpacing};
  color: ${({ isOpen, theme }) => (isOpen ? theme.primary : "inherit")};
  transition: all 0.3s ease-in-out;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const Icons = styled.div`
  & > svg {
    transition: all 0.3s ease-in-out;
    font-size: ${fontSize.mdtfSpacing};
    cursor: pointer;
  }
`;

RecurssiveBar.defaultProps = {
  navArr: [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "about",
      link: "/about",
    },
    {
      name: "contact",
      link: "/contact",
    },
    {
      name: "Men",
      link: "/men",
      child: [
        {
          name: "Shirt",
          link: "/men/shirt",
        },
        {
          name: "T-Shirt",
          link: "/men/t_shirt",
        },
      ],
    },
    {
      name: "Women",
      link: "/women",
      child: [
        {
          name: "Shirt",
          link: "/women/shirt",
        },
        {
          name: "T-Shirt",
          link: "/women/t_shirt",
        },
      ],
    },
    {
      name: "Kids",
      link: "/kids",
      child: [
        {
          name: "Shirt",
          link: "/kids/shirt",
        },
        {
          name: "T-Shirt",
          link: "/kids/t_shirt",
        },
      ],
    },
  ],
};

export default RecurssiveBar;
