import React from "react"
import { ProtectedRoute } from "./ProtectedRoute"
import { useAuth } from "./providers/Auth"

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
  const { user } = useAuth()
  const isAllowed = guardType === "authenticated" ? !!user : !user
  return (
    <ProtectedRoute
      isAllowed={isAllowed}
      redirectPath={redirectPath}
      {...props}
    />
  )
}
