import React from "react";
import {
  Wrapper,
  Item,
  ItemContainer,
  MainContainer,
  Title,
  WrapperContainer,
} from "./FooterItem.styled";

const FooterItem = ({ footerArr }) => {
  return (
    <Wrapper>
        <Title> {footerArr.title} </Title>
        <MainContainer>
          {footerArr.items.map((item, index) => (
            <Item key={index}>
              <ItemContainer to={item.link}>{item.name}</ItemContainer>
            </Item>
          ))}
        </MainContainer>
    </Wrapper>
  );
};

export default FooterItem;
