import Cookies from "universal-cookie";
const cookies = new Cookies();
cookies.set("myCat", "Pacman", { path: "/" });
console.log(cookies.get("myCat")); // Pacman

export const setAuthToken = (token) => {
  return cookies.set("authToken", token);
};

export const getAuthToken = () => {
return "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2Iiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNjQxMjMxNTY4LCJleHAiOjE2NDEyMzUxNjgsImp0aSI6IjVjNGU0NjY5LWUwOWEtNDE4Ny1iMzRkLTEwMTNlMzU0YjBlMyJ9.1YMMACBV6YyaAXcjLMteOWBPwTeGZpfOPjA2Hv6wzGI"
  //   return cookies.get("authToken");
};
