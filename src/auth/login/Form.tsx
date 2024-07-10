import { MdErrorOutline } from "react-icons/md"
import { useDispatch } from "react-redux"
import { useLocation, useNavigate } from "react-router"
import Eye from "../../components/svgs/Eye"
import EyeClosed from "../../components/svgs/EyeClosed"
import { useAppSelector } from "../../redux/hooks"
import {
  togglePasswordVisibility,
  toggleRememberMe,
  updatePassword,
  updatePasswordError,
  updateUsername,
  updateUsernameError,
} from "../../redux/slices/user/loginSlice"
import { isPasswordCorrect, isUsernameCorrect } from "../utils/validators"
import { useAuth } from "../providers/Auth"

const Form = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const loginState = useAppSelector((state) => state.login)

  const navigate = useNavigate()
  const { login } = useAuth()
  const from = location.state?.from?.pathname || "/"
  const handleLogin = async (e: any) => {
    e.preventDefault()

    await login(loginState.username, loginState.password)

    // navigate(from, { replace: true })
  }
  const handleUsernameChange = (username: string) => {
    if (isUsernameCorrect(username)) {
      dispatch(updateUsername(username))
      dispatch(updateUsernameError(""))
    } else {
      dispatch(
        updateUsernameError(
          "Please enter your Spotify username or email address."
        )
      )
    }
  }
  const handlePasswordChange = (password: string) => {
    if (isPasswordCorrect(password)) {
      dispatch(updatePassword(password))
      dispatch(updatePasswordError(""))
    } else {
      dispatch(updatePasswordError("Please enter your password."))
    }
  }

  return (
    <form className="flex flex-col gap-8">
      <div className="flex flex-col gap-2 [&_input]:w-full [&>label]:text-sm [&>label]:flex [&>label]:flex-col [&>label]:gap-2">
        <label>
          Email or username
          <input
            type="text"
            name="username"
            className={`px-3 py-3 ${
              loginState.usernameError !== ""
                ? "border-red-600"
                : "border-silver"
            } border-[1.5px] bg-main-dark font-semibold rounded-sm ${
              loginState.usernameError
                ? "focus:border-none"
                : "focus:border-[2.5px] focus:border-white"
            }`}
            onChange={(e) => {
              handleUsernameChange(e.target.value)
            }}
          />
          {loginState.usernameError && (
            <div className="flex gap-1 font-medium text-sm">
              <MdErrorOutline size={20} color="rgb(241, 94, 108)" />
              <span className="text-error">{loginState.usernameError}</span>
            </div>
          )}
        </label>

        <label>
          Password
          <div className="relative flex">
            <input
              type={loginState.isPasswordVisible ? "text" : "password"}
              name="password"
              className={`px-3 py-3 ${
                loginState.passwordError ? "border-red-600" : "border-silver"
              } border-[1.5px] bg-main-dark font-semibold rounded-sm ${
                loginState.passwordError
                  ? "focus:border-none"
                  : "focus:border-[2.5px] focus:border-white"
              }`}
              onChange={(e) => handlePasswordChange(e.target.value)}
            />
            <div
              className="absolute inset-y-0 right-2 flex items-center"
              onClick={() => dispatch(togglePasswordVisibility())}
            >
              {loginState.isPasswordVisible ? <Eye /> : <EyeClosed />}
            </div>
          </div>
          {loginState.passwordError && (
            <div className="flex gap-1 font-medium text-sm">
              <MdErrorOutline size={20} color="rgb(241, 94, 108)" />
              <span className="text-error">{loginState.passwordError}</span>
            </div>
          )}
        </label>
        {/* button remember me */}
        <div className="flex gap-3 mt-4">
          <div
            className={`rounded-full w-8 h-4 flex flex-col focus:buttonFocused ${
              loginState.rememberMe ? " bg-background-base" : "bg-gray-400"
            } justify-center mouseDown`}
            onClick={() => dispatch(toggleRememberMe())}
          >
            <div
              className={`${
                loginState.rememberMe ? "translate-x-[18px]" : "translate-x-0"
              } transform transition-transform rounded-full w-3 h-3 bg-black mx-[1px]`}
              onClick={(e) => e.preventDefault()}
            ></div>
          </div>
          <span className="text-[0.6rem] font-semibold">Remember me</span>
        </div>
      </div>
      <button
        type="submit"
        onClick={handleLogin}
        className="bg-background-base rounded-full text-black py-3 hover:scale-105"
      >
        Log in
      </button>
    </form>
  )
}

export default Form
