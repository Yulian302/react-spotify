import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: any = []

const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    setSongs: (_, action: PayloadAction<any>) => {
      return action.payload
    },
  },
})

export const { setSongs } = songsSlice.actions

export default songsSlice.reducer
