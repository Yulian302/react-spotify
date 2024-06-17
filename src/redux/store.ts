import { combineReducers, configureStore } from "@reduxjs/toolkit"
import songsSlice from "./slices/songsSlice"
import { useDispatch } from "react-redux"

const rootReducer = combineReducers({
  songs: songsSlice,
})

const store = configureStore({
  reducer: rootReducer,
})

export default store

export type RootState = ReturnType<typeof rootReducer>
export type AppDispath = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispath>()
