import axios from "axios";

export const loggedInUser =
  JSON.parse(localStorage.getItem(process.env.REACT_APP_PROJECT_USER)) || null;

const dynamicURL = `${window.location.origin.replace("3000", "4567")}/nmcn/`;
const httpService = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  //baseURL: dynamicURL,
  timeout: 180000,
  //withCredentials: "include",
  headers: {
    "Content-Type": "application/json",
    accountid: loggedInUser ? loggedInUser._id : "",
  },
});
const auwalEndpoint = axios.create({
  baseURL: "https://mindtech.ng/nmcn/",
  timeout: 20000,

  headers: {
    "Content-Type": "application/json",
  },
});
export const backendURL = process.env.REACT_APP_BACKEND_URL;

httpService.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response && error.response.status === 401) {
      const { data } = await httpService.post("auth/refreshtoken", {
        id: loggedInUser._id,
      });

      if (data) console.log(data);
      return httpService(error.config);
    }

    if (error.response)
      return { error: error.response.data, status: error.response.status };
    return { error: "Lost connection to the server" };
  }
);
const logout = async () => {
  const res = await httpService.get("logout");
  if (res) {
    localStorage.removeItem(process.env.REACT_APP_PROJECT_USER);
    window.location.assign("/");
  }
};
export { httpService, logout, auwalEndpoint };
