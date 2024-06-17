import React from "react"

const AuthContext = React.createContext({
  user: null,
  login: () => {},
  logout: () => {},
})

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = React.useState<any>(null)
  const login = async () => {
    setUser({ username: "yulian", password: "3022003" })
  }
  const logout = async () => {
    setUser(null)
  }
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
export const useAuth = () => React.useContext(AuthContext)
