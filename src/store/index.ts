import { configureStore } from '@reduxjs/toolkit'
import { type TypedUseSelectorHook, useSelector } from 'react-redux'
import counterSlice from './slices/counterSlice'

export const store = configureStore({
	reducer: {
		counter: counterSlice,
	},
})

export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export type AppDispatch = typeof store.dispatch
