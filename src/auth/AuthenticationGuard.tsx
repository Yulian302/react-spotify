import React, { Suspense, useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { fetchUserFormCookie } from "../redux/slices/user/userSlice"
import { ProtectedRoute } from "./ProtectedRoute"
import { Navigate, useLocation } from "react-router"
type AuthenticationGuardProps = {
  children?: React.ReactElement
  redirectPath?: string
  guardType?: "authenticated" | "unauthenticated"
}
const isLocationInOpenAuth = (location: string) => {
  return ["/login", "/signup"].includes(location)
}
function AwaitAuthenticationGuard({
  redirectPath = "/login",
  guardType = "authenticated",
  children,
}: AuthenticationGuardProps): JSX.Element {
  const dispatch = useAppDispatch()
  const location = useLocation()
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

    fetchUserData()
  }, [dispatch, user.username, guardType])

  const isAllowed =
    guardType === "authenticated" ? user.username !== undefined : true
  if (isAllowed && user.username && isLocationInOpenAuth(location.pathname)) {
    return <Navigate to={"/"} />
  }

  if (isLoading) {
    return <div>Loading...</div>
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
