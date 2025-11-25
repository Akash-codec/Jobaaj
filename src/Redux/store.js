import { configureStore } from "@reduxjs/toolkit";
import JobSlice from "./Slices/JobSlice"

const store = configureStore({
  reducer: { 
    jobs: JobSlice,
  }
});

export default store;

