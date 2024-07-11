import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import axios from "../../../api/axios.config"

const initialState: User = {}

export const fetchUserFormCookie = createAsyncThunk<any>(
	"user/fetchUserFromCookie",
	async () => {
		try {
			const response = await axios.post("/auth/verify_token")
			if (response.status === 200) {
				return response.data as User
			} else {
				return undefined
			}
		} catch (error) {
			return undefined
		}
	}
)

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
	extraReducers: (builder) => {
		builder
			.addCase(fetchUserFormCookie.fulfilled, (state, action) => {
				return action.payload
			})
			.addCase(fetchUserFormCookie.rejected, (state, action) => {
				return initialState
			})
	},
})

export const { setUser } = userSlice.actions

export default userSlice.reducer
