import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { HiOutlineUser, HiOutlineBookmark } from "react-icons/hi";
import { CgProfile, CgNotes } from "react-icons/cg";
import {
  EditBtn,
  EditerProfile,
  ProfileEditBtn,
  ProfileName,
  ProfilePicture,
  SIndexProfile,
  SProfileBox,
  SProfileContainer,
  SProfileItems,
  SProfileLabel,
} from "./ProfileItems.styled";
import { openFormModel } from "../../../app/feature/formModelSlice";

const ProfileItems = ({ profile }) => {
  const [removeProfile, setRemoveProfile] = useState(false);
  const dispatch = useDispatch();
  const { isLogged } = useSelector((store) => store.authUser);

  const logOutHandler = async () => {
    try {
      await axios.get("/api/v1/user/logout");
      localStorage.removeItem("firstUser");
      window.location.href = "/";
    } catch (error) {
      window.location.href = "/";
    }
  };
  return (
    <SProfileBox profile={profile} >
      {!isLogged && (
        <SIndexProfile>
          <SProfileItems to="/login" onClick={() => dispatch(openFormModel())}>
            <CgProfile />
            <SProfileLabel>login</SProfileLabel>
          </SProfileItems>
          <SProfileContainer />
        </SIndexProfile>
      )}
      {isLogged && (
        <>
          {profile ? (
            <EditerProfile>
              {/* <ProfilePicture>Hi</ProfilePicture> */}
              <ProfileName>
                <p>HI,MAHA !</p>
                <p>maha@gmail.com</p>
              </ProfileName>
              <ProfileEditBtn>
                <EditBtn>Edit</EditBtn>
              </ProfileEditBtn>
            </EditerProfile>
          ) : (
            <SIndexProfile>
              <SProfileItems to={"profile"}>
                <HiOutlineUser />
                <SProfileLabel>Profile</SProfileLabel>
              </SProfileItems>
              <SProfileContainer />
            </SIndexProfile>
          )}
        </>
      )}
      {profileData.map(({ label, link, icon }, index) => {
        return (
          <SIndexProfile key={index}>
            <SProfileItems to={link}>
              {icon}
              <SProfileLabel>{label}</SProfileLabel>
            </SProfileItems>
            <SProfileContainer />
          </SIndexProfile>
        );
      })}
      {isLogged && (
        <SIndexProfile onClick={logOutHandler}>
          <SProfileItems to="/">
            <CgProfile />
            <SProfileLabel>logout</SProfileLabel>
          </SProfileItems>
          {!profile && <SProfileContainer />}
        </SIndexProfile>
      )}
    </SProfileBox>
  );
};

const profileData = [
  {
    label: "my orders",
    link: "/orders",
    icon: <CgNotes />,
  },
  {
    label: "my address",
    link: "/profile/address",
    icon: <CgNotes />,
  },
  {
    label: "my payment",
    link: "/payment",
    icon: <CgNotes />,
  },
  {
    label: "help",
    link: "/login",
    icon: <HiOutlineUser />,
  },
];

export default ProfileItems;
