/**
 * Auth slice
 */
import { createSlice } from '@reduxjs/toolkit';
// import { doLogin } from './thunks';

const initialState = {
	apiToken: null,
	authgroup: null,
	userId: null,
	userName: null,
	userType: null,
	status: 'idle',
	error: null,
};


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loggedOut: (state) => {
            state.status = 'idle'
            state.apiToken = null
            state.userId = null;
			state.userName = null;
        }
    }
})

export default authSlice.reducer;