import React from "react";
import { useSelector } from "react-redux";
import { navArr,navAdminArr } from "../../../constants/NavData";
import { SLabel, SNavItems, SWrapper } from "./SNav.styled";


const SNav = () => {
const {  isAdmin } = useSelector((store) => store.authUser);
const data = isAdmin ? navAdminArr : navArr;
  return ( 
    <SWrapper>
        {data.map(({ label, link }, index) => {
          return (
            <SNavItems key={index} to={link}>
              <SLabel>{label}</SLabel>
            </SNavItems>
          );
        })}
    </SWrapper>
  );
};



export default SNav;
