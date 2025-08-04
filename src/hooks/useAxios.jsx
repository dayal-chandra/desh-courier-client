import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `https://desh-courier-server.vercel.app`,
});

const useAxios = () => {
  return axiosInstance;
};

export default useAxios;
