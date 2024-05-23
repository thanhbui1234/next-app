import { jobsAction } from "@/interface";
import { fetchJobs } from "@/lib/services";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState  = {
  loading: 'idle',
  jobs : []
} as jobsAction;

export const fetchAllJob = createAsyncThunk("fetchJobs", async ()  => {
  try {
    const response = await fetchJobs();
    return response;
  } catch (error) {
    throw(error)
  }
 
});

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllJob.pending,(state)=>{
      state.loading = 'pending'
    })
    builder.addCase(fetchAllJob.rejected,(state)=>{{
      state.loading = 'failed'
    }})
    builder.addCase(fetchAllJob.fulfilled,(state,action)=>{{
      state.loading = 'succeeded'
      state.jobs = action.payload as any
    }})
  },
});

// Action creators are generated for each case reducer function

export default counterSlice.reducer;
