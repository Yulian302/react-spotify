import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: User = {}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | undefined>) => {
      if (action.payload !== undefined) {
        return { ...state, ...action.payload }
      } else {
        return state
      }
    },
  },
})

export const { setUser } = userSlice.actions

export default userSlice.reducer
