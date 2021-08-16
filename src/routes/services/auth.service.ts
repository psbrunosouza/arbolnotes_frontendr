export const authService = () => {
  return localStorage.getItem("token") ? true : false;
};
