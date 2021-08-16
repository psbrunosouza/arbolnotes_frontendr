import axios from "axios";
import { User } from "../../entities/user";
import { baseURL } from "../../@config/config.json";

export const loginService = async (user: User) => {
  axios.post(`${baseURL}/auth`, user).then((response) => {
    const user = response.data;
    localStorage.setItem("token", user.token);
  });
};
