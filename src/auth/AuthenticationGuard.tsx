import React, { Suspense, useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { fetchUserFormCookie } from "../redux/slices/user/userSlice"
import { ProtectedRoute } from "./ProtectedRoute"
type AuthenticationGuardProps = {
	children?: React.ReactElement
	redirectPath?: string
	guardType?: "authenticated" | "unauthenticated"
}

function AwaitAuthenticationGuard({
	redirectPath = "/login",
	guardType = "authenticated",
	children, // Add children prop
}: AuthenticationGuardProps): JSX.Element {
	// Change return type
	const dispatch = useAppDispatch()
	const user = useAppSelector((state) => state.user)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const fetchUserData = async () => {
			if (!user.username) {
				try {
					await dispatch(fetchUserFormCookie())
				} catch (error) {
					console.error("Error fetching user:", error)
				}
			}
			setIsLoading(false)
		}

		if (guardType === "authenticated") {
			fetchUserData()
		} else {
			setIsLoading(false) // Set loading to false for "unauthenticated" guard
		}
	}, [dispatch, user.username, guardType])

	const isAllowed =
		guardType === "authenticated" ? user.username !== undefined : true

	if (isLoading) {
		return <div>Loading...</div> // or any loading indicator
	}

	return (
		<ProtectedRoute
			isAllowed={isAllowed}
			redirectPath={redirectPath}
			children={children}
		/>
	)
}

export const AuthenticationGuard: React.FC<AuthenticationGuardProps> = (
	props
) => (
	<Suspense fallback={<div>Loading...</div>}>
		<AwaitAuthenticationGuard {...props} />
	</Suspense>
)
