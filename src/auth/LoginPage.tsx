import { Form, useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "./providers/Auth"

function LoginPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const { login } = useAuth()
  const from = location.state?.from?.pathname || "/"
  const handleLogin = async () => {
    await login()

    navigate(from, { replace: true })
  }
  return (
    <div>
      <p>You must log in to view the page</p>
      <form>
        <label>
          Username: <input type="text" name="username" />
        </label>
        <button type="submit" onClick={handleLogin}>
          login
        </button>
      </form>
    </div>
  )
}

export default LoginPage
