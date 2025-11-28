// src/redux/jobSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch jobs from JSON
export const fetchJobs = createAsyncThunk(
  "jobs/fetchJobs",
  async () => {
    const response = await axios.get("/jobs.json");
    return response.data;
  }
);

const jobSlice = createSlice({
  name: "jobs",
  initialState: {
    jobs: [],
    categorizedJob: [],
    loading: false,
    error: null,
  },
  reducers: { 
    filterJobsByCategory: (state, action) => {
      const category = action.payload.toLowerCase();
      state.categorizedJob = state.jobs.filter(
        (job) => job.category.toLowerCase() === category
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = action.payload; // full job array
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { filterJobsByCategory } = jobSlice.actions;
export default jobSlice.reducer;
