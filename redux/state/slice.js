import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const stateSlice = createSlice({
	name: 'stateName',
	initialState,
	reducers: {
		action: (state, { payload }) => {
			//state change logic
		},
	},
});

const { action } = stateSlice.actions;

export { action };

export const stateReducer = stateSlice.reducer;
