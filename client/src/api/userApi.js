import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo, loginUser } from "../app/feature/authSlice";
import { getAccessToken } from "../app/feature/tokenSlice";

const userApi = () => {
  const { user, isLogged } = useSelector((store) => store.authUser);
  const { token } = useSelector((store) => store.token);
  console.log("User", user);
  const dispatch = useDispatch();
  const firstUser = localStorage.getItem("firstUser");
  const getToken = async () => {
    try {
      const resp = await axios.post("/api/v1/user/refresh_token", null);
      dispatch(getAccessToken(resp.data.access_token));
      console.log("resp", resp);
    } catch (err) {
      console.log(err);
    }
  };
  const getUser = () => {
    dispatch(loginUser());
    dispatch(getUserInfo(token));
  };

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
  return <div>userApi</div>;
};

export default userApi;
