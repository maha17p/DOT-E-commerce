import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adminUser, getUserInfo, loginUser } from "../../app/feature/authSlice";
import { getAccessToken } from "../../app/feature/tokenSlice";
import Footer from "../Footer/Footer";

import Navbar from "../Navbar/Navbar";
import { SLayout, SMain, SMainContainer } from "./Layout.styled";

const Layout = ({ children }) => {
  const { user, isLogged } = useSelector((store) => store.authUser);
  const { token } = useSelector((store) => store.token);
  const dispatch = useDispatch();
  const firstUser = localStorage.getItem("firstUser");

  const getToken = async () => {
    try {
      const resp = await axios.post("/api/v1/user/refresh_token", null);
      dispatch(getAccessToken(resp.data.access_token));
    } catch (err) {
      console.log(err);
    }
  };
  const getUser = () => {
    dispatch(loginUser());
    dispatch(getUserInfo(token));
  };

  // const getStripeAPIKey = async () => {
  //   try{
  //     const {data} = await axios.get("/api/v1/payment/stripeapikey")
  //     console.log("resdo",data)
  //   }catch(err){
  //     console.log(err)
  //   }
  // }
  
  // useEffect(()=> {
  //   getStripeAPIKey()
  // },[])

  useEffect(() => {
    if (firstUser) {
      getToken();
    }
  }, [isLogged]);
  
  useEffect(() => {
    if (token) {
      getUser();
    }
  }, [token]);
  useEffect(() => {
    if(user.role === 1){
      dispatch(adminUser())
    }
  },[user])

  return (
    <SLayout>
      <Navbar />
      <SMain>
        <SMainContainer>{children}</SMainContainer>
      </SMain>
      <Footer />
    </SLayout>
  );
};

export default Layout;
