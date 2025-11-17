import { configureStore } from "@reduxjs/toolkit";
import JobSlice from "./Slices/JobSlice"

const store = configureStore({
  reducer: { 
    job: JobSlice,
  }
});

export default store;

