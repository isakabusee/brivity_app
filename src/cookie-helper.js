import Cookies from "universal-cookie";
const cookies = new Cookies();

export const setAuthToken = (token) => {
  return cookies.set("authToken", token);
};

export const getAuthToken = () => {
  return cookies.get("authToken");
};

export const Logout = () => {
  cookies.set("authToken", null);
  return window.location.assign("/login");
};

export const isUserLoggedIn = () => {
  const token = cookies.get("authToken");
  console.log(!token, "token");
  if (token !== null) return window.location.assign("/login");
  else return true;
};