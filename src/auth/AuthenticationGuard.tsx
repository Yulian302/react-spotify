import React from "react"
import { ProtectedRoute } from "./ProtectedRoute"
import { useAppSelector } from "../redux/hooks"

type AuthenticationGuardProps = {
  children?: React.ReactElement
  redirectPath?: string
  guardType?: "authenticated" | "unauthenticated"
}

export const AuthenticationGuard: React.FC<AuthenticationGuardProps> = ({
  redirectPath = "/login",
  guardType = "authenticated",
  ...props
}) => {
  const user = useAppSelector((state) => state.user)
  const isAllowed =
    guardType === "authenticated" ? !!user.username : !user.username
  return (
    <ProtectedRoute
      isAllowed={isAllowed}
      redirectPath={redirectPath}
      {...props}
    />
  )
}
