import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

interface UserState {
	email: string
	firstName: string
	lastName: string
	uid: string
	userType: 'user' | 'nutritionist'
	loading: boolean
}

const initialState: UserState = {
	email: '',
	firstName: '',
	lastName: '',
	uid: '',
	userType: 'user',
	loading: false,
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<UserState>) => {
			const { email, firstName, lastName, uid, userType } = action.payload

			state.email = email
			state.firstName = firstName
			state.lastName = lastName
			state.uid = uid
			state.userType = userType
		},
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.loading = action.payload
			console.log('loading', action.payload)
		},
		clearUser: (state) => {
			state.email = ''
			state.firstName = ''
			state.lastName = ''
			state.uid = ''
			state.userType = 'user'
			state.loading = false
		},
	},
})

export const { setUser, setLoading, clearUser } = userSlice.actions

export default userSlice.reducer
