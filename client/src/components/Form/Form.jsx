import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoMdClose } from "react-icons/io";
import {
  SBox,
  SBtnContainer,
  SCloseIcon,
  SForgot,
  SForgotLabel,
  SForm,
  SFormContainer,
  SImage,
  SImageContainer,
  SInput,
  SLabel,
  SLayer,
  SLoginBtn,
  SMainLayer,
  SNaviagate,
  SNLink,
  STitle,
  Wrapper,
} from "./Form.styled";
import { closeFormModel } from "../../app/feature/formModelSlice";
import { ErrorMsg, SuccessMsg } from "../../utils/Notification/Notification";
import { loginUser } from "../../app/feature/authSlice";

const prepareForm = (formArr) => {
  return formArr.reduce((prev, curr) => ({ ...prev, [curr.name]: "" }), {});
};

const Form = ({
  title,
  formArr,
  submitBtn,
  redirect,
  img,
  forgot,
  onSubmit,
  main,
}) => {
 const {isLogged}  = useSelector(store => store.authUser)
 const {formModel} = useSelector(store => store.formModel)
 const dispatch = useDispatch()
  const data = prepareForm(formArr);
  const formData = { ...data, err: "", success: "" };
  const [form, setForm] = useState(formData);

  const sumbitFormHandler = () =>
    onSubmit(form, () => {
      setForm(formData);
    });

  const changeHandler = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      { !isLogged &&  !formModel && (
        <Wrapper>
          <SLayer>
            <SMainLayer>
              {/* Image Container */}
              <SImageContainer>
                <SImage src={img} alt={submitBtn} />
              </SImageContainer>
              {/* Form Container */}
              <SFormContainer>
                <SForm
                  onSubmit={(e) => {
                    e.preventDefault();
                    sumbitFormHandler();
                  }}
                >
                  {main?.err && <ErrorMsg msg={main?.err} />}
                  {main?.success && <SuccessMsg msg={main?.success} />}
                  <STitle>{title}</STitle>
                  <SBox>
                    {formArr.map(({ name, label, type }, index) => {
                      return (
                        <SInput
                          key={index}
                          name={name}
                          placeholder={label}
                          type={type}
                          value={form[name]}
                          onChange={(e) => changeHandler(e)}
                        />
                      );
                    })}
                  </SBox>

                  {forgot && (
                    <>
                      <SForgot>
                        <SForgotLabel to={forgot.link}>
                          {forgot.label}
                        </SForgotLabel>
                      </SForgot>
                    </>
                  )}

                  <SBtnContainer>
                    <SLoginBtn>{submitBtn}</SLoginBtn>
                  </SBtnContainer>
                  {redirect && (
                    <>
                      <SNaviagate>
                        <SLabel>{redirect.label}</SLabel>
                        <SNLink to={redirect.link.to}>
                          {redirect.link.label}
                        </SNLink>
                      </SNaviagate>
                    </>
                  )}
                </SForm>
              </SFormContainer>
              {/* Close Icon */}
              <SCloseIcon onClick={() => dispatch(closeFormModel())} >
                <IoMdClose />
              </SCloseIcon>
            </SMainLayer>
          </SLayer>
        </Wrapper>
      )}
    </>
  );
};

export default Form;
