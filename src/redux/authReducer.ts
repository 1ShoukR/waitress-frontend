import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginResponse } from '../../types/types';

interface AuthState {
    apiToken: string | null;
    authgroup: string | null;
    userId: number | null;
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
        setUser: (state, action: PayloadAction<LoginResponse>) => { // Replace 'any' with your user type
            state.status = 'succeeded';
            state.apiToken = action.payload.token;
            state.userId = action.payload.user.userId;
            state.userName = action.payload.user.firstName + " " + action.payload.user.lastName;
            state.userType = action.payload.user.authType;
            state.error = null;
        },
        loggedOut: (state) => {
            state.status = 'idle'
            state.apiToken = null
            state.userId = null;
            state.userName = null;
        }
    }
});

export const { setUser, loggedOut } = authSlice.actions;
export default authSlice.reducer;