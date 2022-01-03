import Cookies from "universal-cookie";
const cookies = new Cookies();
cookies.set("myCat", "Pacman", { path: "/" });
console.log(cookies.get("myCat")); // Pacman

export const setAuthToken = (token) => {
  return cookies.set("authToken", token);
};

export const getAuthToken = () => {
  return "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI3Iiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNjQxMjAwMTMzLCJleHAiOjE2NDEyMDM3MzMsImp0aSI6ImE5MmEyNjgwLTIxYTctNGJiOS1iZjM5LWM2YzI4YWYxZTljYSJ9.VJeAjdTue2e8_KKsMeoWvEitLvMkK-w-Gsrrolt6Dlc";
  //   return cookies.get("authToken");
};
