import React from "react";
import { useSelector } from "react-redux";
import FormContainer from "../../components/PaymentForm/StepperForm/FormContainer/FormContainer";
import { ShippingDetails } from "../../components/PaymentForm/StepperForm/Steps";
import ShippingUserAddress from "../../components/ShippingUserAddress/ShippingUserAddress";
import {
  MainContainer,
  ShippingAddress,
  SubContainer,
} from "../SingleUserOrder/SingleUserOrder.styled";
import { AddressDetails, EditingDetails, Wrapper } from "./MyAddress.styled";

const MyAddress = () => {
  const { userSingleOrder } = useSelector((state) => state.order);

  const onSUmbitHandler = (form) => {
    console.log(form);
  };
  return (
    <MainContainer>
      <SubContainer>
        <ShippingUserAddress changeAddress={"Add Address"} userSingleOrder={userSingleOrder} />
      </SubContainer>
      <EditingDetails>
        <FormContainer
          title={"Shipping Details"}
          onSubmitCall={onSUmbitHandler}
          formArr={formArr}
        />
      </EditingDetails>
    </MainContainer>
  );
};

const formArr = [
  {
    name: "address",
    value: "address",
    type: "text",
  },
  {
    name: "city",
    value: "city",
    type: "text",
  },
  {
    name: "pinCode",
    value: "pincode",
    type: "number",
  },
  {
    name: "phoneNumber",
    value: "phone number",
    type: "number",
  },
  {
    name: "country",
    value: "country",
    type: "select",
  },
  {
    name: "state",
    value: "state",
    type: "select",
  },
];

export default MyAddress;
