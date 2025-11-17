import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// ----------- Async Thunk: Fetch Jobs -----------
export const fetchJobs = createAsyncThunk(
  "jobs/fetchJobs",
  async () => {
    const res = await axios.get("https://api.escuelajs.co/api/v1/products");
    return res.data;
  }
);

// ----------- Slice -----------
const JobSlice = createSlice({
  name: "jobs",
  initialState: {
    jobList: [],
    loading: false,
    error: null,
  },
  reducers: {
    // simple reducer example
    clearJobs: (state) => {
      state.jobList = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.jobList = action.payload; // store jobs
      })
      .addCase(fetchJobs.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch jobs";
      });
  },
});

// Export actions
export const { clearJobs } = JobSlice.actions;

// Export reducer
export default JobSlice.reducer;
