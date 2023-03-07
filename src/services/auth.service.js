import axios from "axios";

const API_URL = "http://inventorymanagement-env-1.eba-chx7eghp.us-east-2.elasticbeanstalk.com/api/auth/";

const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      //console.log("token Response:" + response.data.accessToken)
      if (response.data.accessToken) {
        //console.log(JSON.stringify(response.data));
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;
