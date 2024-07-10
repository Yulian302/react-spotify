import { combineReducers, configureStore } from "@reduxjs/toolkit"
import songsSlice from "./slices/songsSlice"
import loginSlice from "./slices/user/loginSlice"
import userSlice from "./slices/user/userSlice"

const rootReducer = combineReducers({
  songs: songsSlice,
  login: loginSlice,
  user: userSlice,
})

const store = configureStore({
  reducer: rootReducer,
})

export default store

export type RootState = ReturnType<typeof rootReducer>
export type AppDispath = typeof store.dispatch
