import React from "react";
import EmptyNavbar from "../../components/EmptyNavbar/EmptyNavbar";
import {
  HomeBtn,
  HomeLink,
  SError,
  SErrorMsg,
  SNotFound,
  SNotFoundContext,
  SZero,
} from "./NotFound.styled";

const NotFound = () => {
  return (
    <SNotFound>
      <EmptyNavbar />
      <SNotFoundContext>
        <SError>
          4<SZero>0</SZero>4
        </SError>
        <SErrorMsg>That page was not found!</SErrorMsg>
        <HomeBtn>
          <HomeLink to="/">Go Home</HomeLink>
        </HomeBtn>
      </SNotFoundContext>
    </SNotFound>
  );
};

export default NotFound;
