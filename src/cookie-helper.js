import Cookies from "universal-cookie";
const cookies = new Cookies();
cookies.set("myCat", "Pacman", { path: "/" });
console.log(cookies.get("myCat")); // Pacman

export const setAuthToken = (token) => {
  return cookies.set("authToken", token);
};

export const getAuthToken = () => {
  return "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2Iiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNjQxMjQwMjQ4LCJleHAiOjE2NDEyNDM4NDgsImp0aSI6ImExMTk1NzdkLTdkN2MtNGQ2Zi1iYmI4LTcyMGIzMmZmMzU4MSJ9.Ip9DWadZOixA54nhjvSSALCeJS8NyonEAueJAe6ZIS4";
  //   return cookies.get("authToken");
};
