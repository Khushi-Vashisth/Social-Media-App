import axios from "axios";

export const LoginCall = async (userCredentials, dispatch) => {
  const ApiUrl = import.meta.env.VITE_API_URL;
  dispatch({ type: "LOGIN_START" });

  try {
    const res = await axios.post(ApiUrl + "auth/user/login", userCredentials);
    dispatch({ type: "LOGIN_SUCCESS", giveMe: res.data });
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", giveMe: err });
  }
};
