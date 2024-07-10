import { Link } from "react-router-dom"
import Logo from "../components/svgs/Logo"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { MdErrorOutline } from "react-icons/md"
import { updateEmailError } from "../redux/slices/user/loginSlice"
import { isEmailCorrect } from "./utils/validators"

const emailError =
  "This email is invalid. Make sure it's written like example@email.com"

const RegisterPage = () => {
  const dispatch = useAppDispatch()
  const registerSlice = useAppSelector((state) => state.login)
  const handleNext = () => {}

  const handleEmailChange = (email: string) => {
    if (email === "") {
      dispatch(updateEmailError(""))
      return
    }
    if (!isEmailCorrect(email)) {
      dispatch(updateEmailError(emailError))
    } else {
      dispatch(updateEmailError(""))
    }
  }
  return (
    <div className="flex justify-center items-start h-screen">
      <div className="flex flex-col items-center justify-start gap-5 mt-6 w-[324px] text-white font-bold h-[100%]">
        <div className="flex flex-col items-center justify-center gap-8 w-full">
          {/* spotify logo */}
          <Logo />
          <h1 className="text-[2.6rem] text-center">
            Sign up to start listening
          </h1>
        </div>
        {/* register form */}
        <div className="w-full flex flex-col gap-3">
          <form className="flex flex-col gap-8">
            <div className="flex flex-col gap-2 [&_input]:w-full [&>label]:text-sm [&>label]:flex [&>label]:flex-col [&>label]:gap-2">
              <label>
                Email address
                <input
                  type="text"
                  name="username"
                  placeholder="name@domain.com"
                  className={`px-3 py-3 ${
                    registerSlice.emailError
                      ? "border-red-600"
                      : "border-silver"
                  } border-[1.5px] bg-main-dark font-semibold rounded-sm ${
                    registerSlice.emailError
                      ? "focus:border-none"
                      : "focus:border-[2.5px] focus:border-white"
                  }`}
                  onChange={(e) => handleEmailChange(e.target.value)}
                />
              </label>
              {registerSlice.emailError && (
                <div className="flex gap-1 font-semibold text-sm">
                  <MdErrorOutline size={30} color="rgb(241, 94, 108)" />
                  <span className="text-error">{registerSlice.emailError}</span>
                </div>
              )}
            </div>
            <button
              type="submit"
              onClick={handleNext}
              className="bg-background-base rounded-full text-black py-3 hover:scale-105"
            >
              Next
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center gap-3">
          <hr className="border w-[8.5rem] border-gray-600 border-t border-r-0 border-b-0 border-l-0 my-6 myHr" />
          <span>or</span>
          <hr className="border w-[8.5rem] border-gray-600 border-t border-r-0 border-b-0 border-l-0 my-6 myHr" />
          {/* oauth buttons */}
        </div>
        <div className="flex flex-col gap-2 w-full">
          <a
            href="www.google.com"
            className="rounded-full border-solid border-silver border-[1px] px-8 py-3 hover:border-white flex justify-between focus:border-[3px]"
          >
            <span className="googleIcon ml-2"></span>
            <span className="mx-auto">Sign up with Google</span>
          </a>
          <a
            href="www.facebook.com"
            className="rounded-full border-solid border-silver border-[1px] px-8 py-3 hover:border-white flex justify-between focus:border-[3px]"
          >
            <span className="facebookIcon ml-2"></span>
            <span className="mx-auto">Sign up with Facebook</span>
          </a>
          <a
            href="www.apple.com"
            className="rounded-full border-solid border-silver border-[1px] px-8 py-3 hover:border-white flex justify-between focus:border-[3px]"
          >
            <span className="appleIcon ml-2"></span>
            <span className="mx-auto"> Sign up with Apple</span>
          </a>
        </div>
        <div className="flex justify-center font-normal py-16">
          <span className="text-gray-400">
            Already have an account? &nbsp;
            <Link
              to="/login"
              className="underline hover:text-background-base text-white"
            >
              Log in here
            </Link>
          </span>
        </div>
      </div>
      <div className="text-center mt-8 absolute bottom-5 text-white">
        <span className="text-xs font-normal [&>a]:underline">
          This site is protected by reCAPTCHA and the Google
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noreferrer"
          >
            <br />
            &nbsp;Privacy Policy&nbsp;
          </a>
          and
          <a
            href="https://policies.google.com/terms"
            target="_blank"
            rel="noreferrer"
          >
            &nbsp;Terms of Service&nbsp;
          </a>
          apply.
        </span>
      </div>
    </div>
  )
}

export default RegisterPage
