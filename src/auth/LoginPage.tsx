import { useDispatch } from "react-redux"
import { Link, useLocation, useNavigate } from "react-router-dom"
import LoginFooter from "../components/LoginFooter"
import Eye from "../components/svgs/Eye"
import EyeClosed from "../components/svgs/EyeClosed"
import Logo from "../components/svgs/Logo"
import { useAppSelector } from "../redux/hooks"
import { useAuth } from "./providers/Auth"
import {
  togglePasswordVisibility,
  toggleRememberMe,
} from "../redux/slices/user/loginSlice"

function LoginPage() {
  const dispatch = useDispatch()
  const loginState = useAppSelector((state) => state.login)
  const navigate = useNavigate()
  const location = useLocation()
  const { login } = useAuth()
  const from = location.state?.from?.pathname || "/"
  const handleLogin = async () => {
    await login()
    navigate(from, { replace: true })
  }
  return (
    <div className="bgGradient w-screen min-h-screen resize-none flex flex-col justify-start items-center pt-8">
      <div className="flex justify-center items-center text-white font-bold bg-main-dark max-w-[734px] w-[734px] h-5/6 rounded-md">
        <div className="flex flex-col items-center justify-center gap-5 mt-6 w-[45%]">
          <div className="flex flex-col items-center justify-center gap-8 w-full">
            {/* spotify logo */}
            <Logo />
            <h1 className="text-2xl">Log in to SpotifyClone</h1>
            {/* oauth buttons */}
            <div className="flex flex-col gap-2 w-full">
              <a
                href="www.google.com"
                className="rounded-full border-solid border-silver border-[1px] px-8 py-3 hover:border-white flex justify-between focus:border-[3px]"
              >
                <span className="googleIcon ml-2"></span>
                <span className="mx-auto">Continue with Google</span>
              </a>
              <a
                href="www.facebook.com"
                className="rounded-full border-solid border-silver border-[1px] px-8 py-3 hover:border-white flex justify-between focus:border-[3px]"
              >
                <span className="facebookIcon ml-2"></span>
                <span className="mx-auto">Continue with Facebook</span>
              </a>
              <a
                href="www.apple.com"
                className="rounded-full border-solid border-silver border-[1px] px-8 py-3 hover:border-white flex justify-between focus:border-[3px]"
              >
                <span className="appleIcon ml-2"></span>
                <span className="mx-auto"> Continue with Apple</span>
              </a>
            </div>
          </div>
          <hr className="border w-[150%] border-gray-600 border-t border-r-0 border-b-0 border-l-0 my-6" />
          {/* login form */}
          <div className="w-full flex flex-col gap-3">
            <form className="flex flex-col gap-8">
              <div className="flex flex-col gap-2 [&_input]:w-full [&>label]:text-sm [&>label]:flex [&>label]:flex-col [&>label]:gap-2">
                <label>
                  Email or username
                  <input
                    type="text"
                    name="username"
                    className="px-3 py-3  border-silver border-[1.5px] bg-main-dark font-semibold rounded-sm focus:border-[2.5px] focus:border-white"
                  />
                </label>
                <label>
                  Password
                  <div className="relative flex">
                    <input
                      type={loginState.isPasswordVisible ? "text" : "password"}
                      name="password"
                      className="px-3 py-3 border-silver border-[1.5px] bg-main-dark font-semibold rounded-sm focus:border-[2.5px] focus:border-white"
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
                      loginState.rememberMe
                        ? " bg-background-base"
                        : "bg-gray-400"
                    } justify-center mouseDown`}
                    onClick={() => dispatch(toggleRememberMe())}
                  >
                    <div
                      className={`${
                        loginState.rememberMe
                          ? "translate-x-[18px]"
                          : "translate-x-0"
                      } transform transition-transform rounded-full w-3 h-3 bg-black mx-[1px]`}
                      onClick={(e) => e.preventDefault()}
                    ></div>
                  </div>
                  <span className="text-[0.6rem] font-semibold">
                    Remember me
                  </span>
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
            <div className="flex justify-center items-center pt-5">
              <Link
                to=""
                className="underline font-semibold hover:text-background-base"
              >
                Forgot your password?
              </Link>
            </div>
          </div>
          <hr className="border w-[150%] border-gray-600 border-t border-r-0 border-b-0 border-l-0 mt-6" />
          <div className="flex justify-center font-normal py-16">
            <span className="text-gray-400">
              Don't have an account? &nbsp;
              <Link
                to=""
                className="underline hover:text-background-base text-white"
              >
                Sign up for Spotify
              </Link>
            </span>
          </div>
        </div>
      </div>
      <LoginFooter />
    </div>
  )
}

export default LoginPage
