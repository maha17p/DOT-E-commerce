import React from "react";
import { useState } from "react";
import { SHeaderHeight } from "../ProductsDisplayer/Products.styled";
import EmptyNavbar from "./../EmptyNavbar/EmptyNavbar";
import {
  DisplayForm,
  StepperForm,
  StepperFormContainer,
  Wrapper,
} from "./PaymentForm.styled";
import StepperControl from "./StepperControl/StepperControl";
import Stepper from "./Stepper/Stepper";
import {
  Final,
  OrderDetails,
  PaymentDetails,
  ShippingDetails,
} from "./StepperForm/Steps";

const PaymentForm = () => {
  const [step, setStep] = useState(1);
  const stepForm = [
    "Shipping Details",
    "Order Details",
    "Payment Details",
    "Complete",
  ];


  const handleClick = (direction) => {
    let newStep = step;
    if (direction === "next") {
      newStep++;
    } else {
      newStep--;
    }
    newStep > 0 && newStep <= stepForm.length && setStep(newStep);
  };

  const displayForm = (step) => {
    switch (step) {
      case 1:
        return <ShippingDetails step={step} handleClick={handleClick}   />;
      case 2:
        return <OrderDetails step={step} handleClick={handleClick} />;
      case 3:
        return <PaymentDetails step={step} handleClick={handleClick} />;
      case 4:
        return <Final step={step} handleClick={handleClick} />;
      default:
    }
  };



  return (
    <Wrapper>
      <EmptyNavbar />
      <SHeaderHeight />
      <StepperFormContainer>
        <Stepper step={step} stepForm={stepForm} />
        <StepperForm>
          <DisplayForm>{displayForm(step)}</DisplayForm>
        </StepperForm>
       
      </StepperFormContainer>
    </Wrapper>
  );
};

export default PaymentForm;
