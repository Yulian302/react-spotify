import { Provider } from "react-redux"
import { Route, Routes } from "react-router"
import { BrowserRouter } from "react-router-dom"
import "./App.css"
import { AuthenticationGuard } from "./auth/AuthenticationGuard"
import HomePage from "./pages/home/Home"
import store from "./redux/store"
import LoginPage from "./auth/LoginPage"

interface AuthProvider {
  username: string | null
  isAuthenticated: boolean
  singin(username: string): Promise<void>
  signout(): Promise<void>
}
const fakeAuthProvider: AuthProvider = {
  username: null,
  isAuthenticated: false,
  async singin(username: string): Promise<void> {
    await new Promise((r) => setTimeout(r, 500))
    fakeAuthProvider.isAuthenticated = true
    fakeAuthProvider.username = username
  },
  async signout(): Promise<void> {
    await new Promise((r) => setTimeout(r, 500))
    fakeAuthProvider.isAuthenticated = false
    fakeAuthProvider.username = ""
  },
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />

          <Route element={<AuthenticationGuard />}>
            <Route path="hello" element={<div>hello</div>} />
          </Route>
          <Route element={<AuthenticationGuard guardType="unauthenticated" />}>
            <Route path="login" element={<LoginPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
