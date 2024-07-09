import { combineReducers, configureStore } from "@reduxjs/toolkit"
import songsSlice from "./slices/songsSlice"
import loginSlice from "./slices/user/loginSlice"

const rootReducer = combineReducers({
  songs: songsSlice,
  login: loginSlice,
})

const store = configureStore({
  reducer: rootReducer,
})

export default store

export type RootState = ReturnType<typeof rootReducer>
export type AppDispath = typeof store.dispatch
