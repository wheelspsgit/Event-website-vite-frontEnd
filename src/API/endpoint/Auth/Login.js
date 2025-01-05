// import axiosInstance from "../../axios/api";
// console.log("inaidw login")
// export const Login = (body) => {
//   console.log("inaidw login")
//   var data=axiosInstance.post("/auth/login", body, {
//     //timeout: 5000 // Set timeout to 5 seconds or higher as needed
   
//   });
//   return   data

// };

import axiosInstance from "../../axios/api";
export const Login = (body) => {
  console.log("Login API called with body:", body);
  return axiosInstance.post("/auth/login", body)
    .then((response) => {
      console.log("Login API response:", response);
      return response;
    })
    .catch((error) => {
      console.error("Error in Login API call:", error);
      throw error;
    });
};
