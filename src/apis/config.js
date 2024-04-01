import axios from "axios";

export const axiosInistance = axios.create({
  baseURL: "https://api.noroff.dev/api/v1",
});

// Add a request interceptor
axiosInistance.interceptors.request.use(
  function (config) {
    config.headers["Authorization"] = "BEARER_TOKEN123456789";
    console.log(config);
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInistance.interceptors.response.use(
  function (response) {
    console.log(response);
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
