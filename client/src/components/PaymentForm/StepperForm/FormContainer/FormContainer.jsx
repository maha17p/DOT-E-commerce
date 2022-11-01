import { useState } from "react";
import {
  ErrorMsg,
  SuccessMsg,
} from "../../../../utils/Notification/Notification";
import StepperControl from "../../StepperControl/StepperControl";
import {
  Box,
  BtnContainer,
  Form,
  Input,
  Label,
  NextBtn,
  PrevBtn,
  SubmitAddress,
  Title,
  Wrapper,
} from "./FormContainer.styled";

const prepareForm = (data) => {
  return data.reduce((prev, curr) => ({ ...prev, [curr.name]: "" }), {});
};

const FormContainer = ({
  formArr,
  title,
  onSubmitCall,
  step,
  handleClick,
  main,
 
}) => {
  const data = prepareForm(formArr);
  const formData = { ...data, err: "", success: "" };
  const [form, setForm] = useState(formData);

  const sumbitFormHandler = () => {
    onSubmitCall(form);
  };
  const changeHandler = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          sumbitFormHandler();
        }}
      >
        {main?.err && <ErrorMsg msg={main?.err} />}
        {main?.success && <SuccessMsg msg={main?.success} />}

        {formArr &&
          formArr.map(({ name, value, type }, index) => {
            return (
              <Box key={index}>
                <Label>{value}</Label>
                <Input
                  type={type}
                  name={name}
                  value={form[name]}
                  placeholder={value}
                  onChange={(e) => changeHandler(e)}
                />
              </Box>
            );
          })}
        {step && step ? (
          <BtnContainer step={step}>
            <PrevBtn type="button" step={step} onClick={handleClick()}>
              Back
            </PrevBtn>
            <NextBtn type="submit">
              {step === 1
                ? "Submit Address"
                : step === 2
                ? "Place Order"
                : step === 3
                ? "Proceed Payment"
                : "Submit"}
            </NextBtn>
          </BtnContainer>
        ) : (
          step && <SubmitAddress type="submit">Submit</SubmitAddress>
        )}
      </Form>
    </>
  );
};

export default FormContainer;
