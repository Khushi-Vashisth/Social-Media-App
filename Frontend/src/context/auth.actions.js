export const Loginstart = (userCredentials) => ({
  type: "LOGIN_START",
});

export const Loginsuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  giveMe: user,
});

export const Loginfailure = (error) => ({
  type: "LOGIN_FAILURE",
  giveMe: error,
});
