import { useState } from "react";
import { useDispatch } from "react-redux";
import { addShippingDetails } from "../../../../app/feature/cartSlice";
import { isEmpty } from "../../../../utils/Validation/validation";
import FormContainer from "../FormContainer/FormContainer";

const ShippingDetails = ({ step, handleClick }) => {
  const [user,setUser] = useState()
  const dispatch = useDispatch();
  const onSUmbitHandler = (form) => {
    const { address, city, country, phoneNumber, pinCode, state } = form;
    if(isEmpty(address) || isEmpty(city) || isEmpty(country) || isEmpty(phoneNumber) || isEmpty(pinCode) || isEmpty(state) ){
      const data = {...form,err:"Please fill in all fields",success:""}
      return setUser(data)
    }

    if(phoneNumber.length <=  9 || phoneNumber.length >=11 ){
      const data = {...form, err:"Phone Number should not more than 10 and less than 10"}
      return setUser(data)
    }


    dispatch(
      addShippingDetails({
        address,
        city,
        country,
        phoneNumber,
        pinCode,
        state,
      })
    );
    handleClick("next")
  };

  return (
    <>
      <FormContainer
        title={"Shipping Details"}
        formArr={formArr}
        onSubmitCall={onSUmbitHandler}
        step={step}
        handleClick={handleClick}
        main={user}
      />
    
    </>
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

export default ShippingDetails;
