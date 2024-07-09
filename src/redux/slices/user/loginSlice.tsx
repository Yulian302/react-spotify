import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: UserLogin & {
  rememberMe: boolean
  isPasswordVisible: boolean
} = {
  username: "",
  password: "",
  rememberMe: true,
  isPasswordVisible: false,
}

const loginSlice = createSlice({
  name: "userLogin",
  initialState,
  reducers: {
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
} = loginSlice.actions

export default loginSlice.reducer
