import React from "react"
import axios from "../../api/axios.config"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { setUser } from "../../redux/slices/user/userSlice"
import Cookies from "universal-cookie"

const AuthContext = React.createContext({
  login: (username: string, password: string) => {},
  logout: () => {},
})

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch()
  const loginState = useAppSelector((state) => state.login)
  const login = async (username: string, password: string) => {
    const response = await axios({
      method: "POST",
      url: "/login",
      data: { username, password },
    })
    if (response.status === 200) {
      new Cookies().set("token", response.data.token)
      dispatch(
        setUser({
          username: loginState.username,
        })
      )
    }
  }
  const logout = async () => {
    dispatch(setUser(undefined))
  }
  return (
    <AuthContext.Provider value={{ login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
export const useAuth = () => React.useContext(AuthContext)
