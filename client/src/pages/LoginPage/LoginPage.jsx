import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Form from "../../components/Form/Form";
import { login } from "../../assets";
import { loginUser } from "../../app/feature/authSlice";

const LoginPage = () => {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmitHandler = async (form, cb) => {
    const { email, password } = form;
    try {
      const resp = await axios.post("/api/v1/user/login", {
        email,
        password,
      });
      const data = { ...form, err: "", success: resp.data.msg };
      setUser(data);
      cb();
      localStorage.setItem("firstUser", true);
      dispatch(loginUser());
      navigate("/");

    } catch (err) {
      const error = { ...form, err: err.response.data.msg, success: "" };
      setUser(error);
    }
  };

  return (
    <Wrapper>
      <Form
        main={user}
        title={"login"}
        formArr={loginArr}
        submitBtn={"login"}
        img={login}
        onSubmit={onSubmitHandler}
        forgot={{
          label: "forgot password ?",
          link: "/forgot",
        }}
        redirect={{
          label: `Don't have an account?`,
          link: {
            label: "Register",
            to: "/register",
          },
        }}
      />
    </Wrapper>
  );
};

const loginArr = [
  {
    label: "email",
    name: "email",
    type: "text",
  },
  {
    label: "password",
    name: "password",
    type: "password",
  },
];

export const Wrapper = styled.div``;

export default LoginPage;
