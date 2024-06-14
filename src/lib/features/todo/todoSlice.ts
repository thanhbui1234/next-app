import { jobsAction } from '@/interface';
import { signUp } from '@/interface/auth';
import { featchJobDetail, fetchJobs } from '@/lib/services';
import { registerAccount } from '@/lib/services/auth';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const initialState = {
  loading: 'idle',
  jobs: [],
  job : {},
} as jobsAction;

export const fetchAllJob = createAsyncThunk('fetchJobs', async (id?:string) => {
  try {
    const response = await fetchJobs(id);
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const fetchJob = createAsyncThunk('fetchJob',async (id:string,thunkApi)=>{
  try {
    const response = await featchJobDetail(id);
    return response.data
  } catch (error) {
    throw(error)
  }
})

export const createAccount = createAsyncThunk('createAccount',async (body : signUp)=>{
  try {
      await registerAccount(body)
  } catch (error) {
    console.log(error);
    
  }
})

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchAllJob.pending, state => {
      state.loading = 'pending';
    });
    builder.addCase(fetchAllJob.rejected, state => {
      {
        state.loading = 'failed';
      }
    });
    builder.addCase(fetchAllJob.fulfilled, (state, action) => {
      {
        state.loading = 'succeeded';
        state.jobs = action.payload as any;
      }
    });
    builder.addCase(fetchJob.pending,(state)=>{
      state.loading = 'pending'
    });
    builder.addCase(fetchJob.rejected,(state)=>{
        state.loading = 'failed'
    }),
    builder.addCase(fetchJob.fulfilled,(state,action)=>{
      state.loading = 'succeeded';
      state.job = action.payload
    })
    builder.addCase(createAccount.pending,(state)=>{
      state.loading = 'pending'
    })
    builder.addCase(createAccount.rejected,(state)=>{
      state.loading = 'failed'
    })
    builder.addCase(createAccount.fulfilled,(state)=>{
      state.loading = 'succeeded'
    })
  },
});

// Action creators are generated for each case reducer function

export default counterSlice.reducer;
