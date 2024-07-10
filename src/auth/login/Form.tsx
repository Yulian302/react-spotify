import {
  togglePasswordVisibility,
  toggleRememberMe,
  updatePassword,
  updateUsername,
  updateUsernameError,
} from "../../redux/slices/user/loginSlice"
import { useDispatch } from "react-redux"
import { useAppSelector } from "../../redux/hooks"
import Eye from "../../components/svgs/Eye"
import EyeClosed from "../../components/svgs/EyeClosed"
import { useLocation, useNavigate } from "react-router"
import { useAuth } from "../providers/Auth"
import { memo } from "react"
import { isUsernameCorrect } from "../utils/validators"
import { MdErrorOutline } from "react-icons/md"
const usernameError = "Username must be longer than 5 characters"
const Form = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const loginState = useAppSelector((state) => state.login)
  const navigate = useNavigate()
  const { login } = useAuth()
  const from = location.state?.from?.pathname || "/"
  const handleLogin = async () => {
    await login()
    navigate(from, { replace: true })
  }
  const handleUsernameChange = (username: string) => {
    if (isUsernameCorrect(username)) {
      dispatch(updateUsername(username))
    } else {
      dispatch(updateUsernameError(usernameError))
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
            className="px-3 py-3  border-silver border-[1.5px] bg-main-dark font-semibold rounded-sm focus:border-[2.5px] focus:border-white"
            onChange={(e) => {
              handleUsernameChange(e.target.value)
            }}
          />
          {loginState.usernameError && (
            <div className="flex gap-1 font-semibold text-sm">
              <MdErrorOutline size={30} color="rgb(241, 94, 108)" />
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
              className="px-3 py-3 border-silver border-[1.5px] bg-main-dark font-semibold rounded-sm focus:border-[2.5px] focus:border-white"
              onChange={(e) => dispatch(updatePassword(e.target.value))}
            />
            <div
              className="absolute inset-y-0 right-2 flex items-center"
              onClick={() => dispatch(togglePasswordVisibility())}
            >
              {loginState.isPasswordVisible ? <Eye /> : <EyeClosed />}
            </div>
          </div>
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

export default memo(Form)
