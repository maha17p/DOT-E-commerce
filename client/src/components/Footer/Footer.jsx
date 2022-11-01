import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import {
  Breaker,
  Content,
  IconContainer,
  IconLink,
  ItemContainer,
  KeepInTouch,
  Rights,
  RightsContainer,
  SocialContainer,
  Title,
  Wrapper,
  WrapperContainer,
} from "./Footer.styled";
import FooterItem from "./FooterItem/FooterItem";
import {
  footerAbout,
  footerShop,
  footerContact,
  footerSocial,
  KeepInTouchArr,
} from "../../constants/FooterData";
const Footer = () => {
  return (
    <Wrapper>
      <WrapperContainer>
        <ItemContainer>
          <FooterItem footerArr={footerShop} />
          <FooterItem footerArr={footerAbout} />
          <FooterItem footerArr={footerContact} />
          <FooterItem footerArr={footerSocial} />
        </ItemContainer>
        <Breaker />
        <KeepInTouch>
          <Title>Keep In Touch</Title>
          <SocialContainer>
            {KeepInTouchArr.map(({ name, link }, index) => (
              <IconContainer key={index}>
                <IconLink to={link}>{name}</IconLink>
              </IconContainer>
            ))}
          </SocialContainer>
        </KeepInTouch>
        <Breaker />
        <RightsContainer>
          <Title>Copyrights</Title>
          <Content>
            <AiOutlineCopyrightCircle />
           <span> {new Date().getFullYear()} DOT Network Pvt.Ltd | All rights reserved</span>
          </Content>
        </RightsContainer>
      </WrapperContainer>
    </Wrapper>
  );
};

export default Footer;
