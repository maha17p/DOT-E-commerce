import React from "react";
import styled from 'styled-components';
import { useSelector,useDispatch } from "react-redux";
import EmptyNavbar from "../../components/EmptyNavbar/EmptyNavbar";
import ProfileItems from "../../components/Navbar/ProfileItems/ProfileItems";
import FormContainer from "../../components/PaymentForm/StepperForm/FormContainer/FormContainer";
import {
  Box,
  Form,
  Label,
  Input,
} from "../../components/PaymentForm/StepperForm/FormContainer/FormContainer.styled";
import { SHeaderHeight } from "../../components/ProductsDisplayer/Products.styled";
import {
  Container,
  EditingAddress,
  EditingProfile,
  ExtraInfo,
  PersonalContainer,
  PersonContainer,
  ProfileContainer,
  Title,
} from "./ProfilePage.styled";
import { useState } from "react";

const ProfilePage = ({formArr}) => {
  const { user, isLogged, isLoading, isAdmin, isEdit } = useSelector( store => store.authUser);
  const { token } = useSelector((store) => store.token);
  const dispatch = useDispatch();
    const [form,setForm] = useState('')

  console.log({ user });
  const changeHandler = e => {
    console.log(e);
  }

  const sumbitFormHandler = () => {

  }


  return (
    <>
      <ProfileContainer>
        <PersonContainer>
          <ProfileItems profile={"profile"} />
        </PersonContainer>
        <PersonalContainer>
          <EditingProfile>
            <Title>Personal Information</Title>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                sumbitFormHandler();
              }}
            >
              {formArr &&
                formArr.map(({ name, value, type }, index) => {
                  return (
                    <Box key={index}>
                      <Label>{value}</Label>
                      <Input
                        type={type}
                        name={name}
                        value={user[name]}
                        placeholder={value}
                        onChange={(e) => changeHandler(e)}
                      />
                    </Box>
                  );
                })}

              <SubmitBtn type="submit">Submit</SubmitBtn>
            </Form>
          </EditingProfile>
        </PersonalContainer>
      </ProfileContainer>
    </>
  );
};

ProfilePage.defaultProps = {
  formArr: [
    {
      name: "name",
      value: "name",
      type: "text",
    },
    {
      name: "email",
      value: "email",
      type: "text",
    },
  ]
};


const SubmitBtn  = styled.button``

export default ProfilePage;
