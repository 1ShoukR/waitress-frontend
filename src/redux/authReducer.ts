/**
 * Auth slice
 */
import { createSlice } from '@reduxjs/toolkit';
// import { doLogin } from './thunks';

interface AuthState {
    apiToken: string | null;
    authgroup: string | null;
    userId: string | null;
    userName: string | null;
    userType: string | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: AuthState = {
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