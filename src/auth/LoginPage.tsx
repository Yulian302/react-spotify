import { Link, useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "./providers/Auth"
import Logo from "../components/Logo"

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
    <div className="bgGradient w-screen min-h-screen resize-none flex justify-center items-center">
      <div className="flex justify-center items-center text-white font-bold bg-main-dark max-w-[734px] w-[734px] h-5/6 rounded-md">
        <div className="flex flex-col items-center justify-center gap-5 mt-6">
          <div className="flex flex-col items-center justify-center gap-8 w-full">
            {/* spotify logo */}
            <Logo />
            <h1 className="text-2xl">Log in to SpotifyClone</h1>
            {/* oauth buttons */}
            <div className="flex flex-col gap-2 w-full">
              <a
                href="www.google.com"
                className="rounded-full border-solid border-[#878787] border-[1px] px-10 py-3 hover:border-white flex justify-between focus:border-[3px]"
              >
                <span className="googleIcon ml-2"></span>
                <span className="mx-auto">Continue with Google</span>
              </a>
              <a
                href="www.facebook.com"
                className="rounded-full border-solid border-[#878787] border-[1px] px-10 py-3 hover:border-white flex justify-between focus:border-[3px]"
              >
                <span className="facebookIcon ml-2"></span>
                <span className="mx-auto">Continue with Facebook</span>
              </a>
              <a
                href="www.apple.com"
                className="rounded-full border-solid border-[#878787] border-[1px] px-10 py-3 hover:border-white flex justify-between focus:border-[3px]"
              >
                <span className="appleIcon ml-2"></span>
                <span className="mx-auto"> Continue with Apple</span>
              </a>
            </div>
          </div>
          <hr className="border w-full border-gray-600 border-t border-r-0 border-b-0 border-l-0 my-6" />
          {/* login form */}
          <div className="w-full flex flex-col gap-3">
            <form className="flex flex-col gap-8">
              <div className="flex flex-col gap-2 [&_input]:w-full [&>label]:text-sm [&>label]:flex [&>label]:flex-col [&>label]:gap-2">
                <label>
                  Email or username
                  <input
                    type="text"
                    name="username"
                    className="px-3 py-3  border-gray-500 border-[1.5px] bg-main-dark font-semibold rounded-sm focus:border-[2.5px] focus:border-white"
                  />
                </label>
                <label>
                  Password
                  <input
                    type="password"
                    name="password"
                    className="px-3 py-3 border-gray-500 border-[1.5px] bg-main-dark font-semibold rounded-sm focus:border-[2.5px] focus:border-white"
                  />
                </label>
                <span className="text-xs font-semibold">Remember me</span>
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
          <hr className="border w-full border-gray-600 border-t border-r-0 border-b-0 border-l-0 my-6" />
          <div className="flex gap-2 font-normal py-12">
            <span className="text-gray-400">Don't have an account?</span>
            <Link to="" className="underline hover:text-background-base">
              Sign up for SpotifyClone
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
