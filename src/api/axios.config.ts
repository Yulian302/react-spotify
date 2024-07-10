import axios from "axios"
import Cookies from "universal-cookie"

const cookies = new Cookies()
const axiosInstance = axios.create({
  baseURL: "http://localhost:8081",
  headers: {
    Authorization: `Bearer ${cookies.get("token")}`,
  },
})
export default axiosInstance
