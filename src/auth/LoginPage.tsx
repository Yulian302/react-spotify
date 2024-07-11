import { Link } from "react-router-dom"
import LoginFooter from "../components/LoginFooter"
import Logo from "../components/svgs/Logo"
import Form from "./login/Form"
import { useAppDispatch } from "../redux/hooks"
import {
	updatePassword,
	updatePasswordError,
	updateUsername,
	updateUsernameError,
} from "../redux/slices/user/loginSlice"
import { useEffect } from "react"

function LoginPage() {
	const dispatch = useAppDispatch()

	useEffect(() => {
		const clearFields = () => {
			dispatch(updateUsername(""))
			dispatch(updateUsernameError(""))
			dispatch(updatePasswordError(""))
			dispatch(updatePassword(""))
		}
		return () => {
			clearFields()
		}
	}, [dispatch])

	return (
		<div className="bgGradient w-screen min-h-screen resize-none flex flex-col gap-20 justify-start items-center pt-8">
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
						<Form />
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
								to="/signup"
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
