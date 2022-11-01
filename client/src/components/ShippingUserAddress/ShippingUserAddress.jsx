import React from "react";
import {
  AddBtn,
  Address,
  AddressBtn,
  AddressName,
  BtnContainer,
  CityName,
  Country,
  DeleteBtn,
  EditBtn,
  Header,
  PhoneNumber,
  PinCode,
  ShippingAddress,
  StateName,
  Title,
  UserName,
} from "./ShippingUserAddress.styled";

const ShippingUserAddress = ({ changeAddress, userSingleOrder }) => {
  return (
    <ShippingAddress>
      {changeAddress && (
        <Header>
          <AddressBtn>
            <AddBtn>+ {changeAddress}</AddBtn>
          </AddressBtn>
          <BtnContainer>
            <EditBtn>Edit</EditBtn>
            <DeleteBtn>Delete</DeleteBtn>
          </BtnContainer>
        </Header>
      )}
      <Title>Shipping To:</Title>
      <UserName>{userSingleOrder?.user?.name},</UserName>
      <Address>
        <AddressName>{userSingleOrder?.shippingInfo?.address},</AddressName>
        <CityName>{userSingleOrder?.shippingInfo?.city},</CityName>
        <StateName>{userSingleOrder?.shippingInfo?.state},</StateName>
        <Country>{userSingleOrder?.shippingInfo?.coutry}</Country>
        <PhoneNumber>
          PH: {userSingleOrder?.shippingInfo?.phoneNumber},
        </PhoneNumber>
        <PinCode>PIN: {userSingleOrder?.shippingInfo?.pinCode}</PinCode>
      </Address>
    </ShippingAddress>
  );
};

export default ShippingUserAddress;
