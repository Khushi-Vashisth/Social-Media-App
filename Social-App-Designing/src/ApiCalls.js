import axios from "axios";

export const LoginCall = async (userCredentials, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post(
      "http://localhost:8000/auth/user/login",
      userCredentials
    );
    dispatch({ type: "LOGIN_SUCCESS", giveMe: res.data });
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", giveMe: err });
  }
};
