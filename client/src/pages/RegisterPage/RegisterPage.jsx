import React,{useState} from "react";
import styled from 'styled-components';
import axios from 'axios'
import { register } from "../../assets";
import Form from "../../components/Form/Form";
import { isEmail, isEmpty, isLength, isMatch } from "../../utils/Validation/validation";

const RegisterPage = () => {

  const [user,setUser] = useState()

  const onSubmitHandler = async (form,cb) => {
    const { name, email, password, cf_password} = form;
    if(isEmpty(name) || isEmpty(password)){
      const data = {...form,err:"Please fill in all fields",success:""}
      return setUser(data)
    }

    if(!isEmail(email)){
      const data = {...form,err:"Invalid Email", success:""}
      return setUser(data)
    }

    if(isLength(password)){
      const data = {...form , err:"Password must be al least 6 characters",success:""}
      return setUser(data)
    }

    if(isMatch(password,cf_password)){
      const data ={...form , err:"Password didn't match",success:""}
      return setUser(data)
    }
    
    try {
      const resp = await axios.post("/api/v1/user/register", {
        name,
        email,
        password,
      });
      const data = { ...form, err: "", success: resp.data.msg };
      setUser(data);
      cb()
    } catch (err) {
      const error = { ...form, err: err.response.data.msg, success: "" };
      setUser(error);
    }

  }
  return (
    <Wrapper>
      <Form
      main={user}
        title={"register"}
        formArr = {registerArr}
        submitBtn = {"register"}
        img={register}
        onSubmit={onSubmitHandler}
        redirect={{
          label:`Already have an account?`,
          link:{
            label:"login",
            to:"/login"
          }
        }}
      />
    </Wrapper>
  );
};

const registerArr = [
  {
    label:"name",
    name:"name",
    type:"text"
  },
  {
    label:"email",
    name:"email",
    type:"text"
  },
  {
    label:"password",
    name:"password",
    type:"password"
  },
  {
    label:"confirm password",
    name:"cf_password",
    type:"password"
  }
]

export const Wrapper = styled.div`
`

export default RegisterPage;
