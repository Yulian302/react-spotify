import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: UserLogin & {
  rememberMe: boolean
  isPasswordVisible: boolean
  emailError: string
  usernameError: string
} = {
  username: "",
  password: "",
  rememberMe: true,
  isPasswordVisible: false,
  emailError: "",
  usernameError: "",
}

const loginSlice = createSlice({
  name: "userLogin",
  initialState,
  reducers: {
    updateEmailError: (state, action: PayloadAction<string>) => {
      state.emailError = action.payload
    },
    updateUsernameError: (state, action: PayloadAction<string>) => {
      state.usernameError = action.payload
    },
    updateUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload
    },
    updatePassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    },
    toggleRememberMe: (state) => {
      state.rememberMe = !state.rememberMe
    },
    togglePasswordVisibility: (state) => {
      state.isPasswordVisible = !state.isPasswordVisible
    },
  },
})

export const {
  updatePassword,
  updateUsername,
  togglePasswordVisibility,
  toggleRememberMe,
  updateEmailError,
  updateUsernameError,
} = loginSlice.actions

export default loginSlice.reducer
