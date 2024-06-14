import { jobsAction } from '@/interface';
import { signUp } from '@/interface/auth';
import { loginUser, registerAccount } from '@/lib/services/auth';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    response: {},
} as jobsAction;

export const createAccount = createAsyncThunk(
    'createAccount',
    async (body: signUp) => {
        try {
            const respone: any = await registerAccount(body);
            return respone;
        } catch (error) {
            throw error;
        }
    }
);

export const loginAccount = createAsyncThunk(
    'loginAccount', async (body: signUp) => {
        try {
            const respone : any = await loginUser(body);
        } catch (error) {
            throw error;
            
        }
    });

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(createAccount.pending, state => {
            state.loading = 'pending';
        });
        builder.addCase(createAccount.rejected, state => {
            state.loading = 'failed';
        });
        builder.addCase(createAccount.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.response = action.payload;
        });
    },
});

// Action creators are generated for each case reducer function

export default counterSlice.reducer;
