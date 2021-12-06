import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "./Home-Api";
const initialState = {
  movies: [],
  status: "idle",
  error: null,
};

export const fetchDataAsync = createAsyncThunk(
  "home/fetchData",
  async (searchText) => {
    const response = await fetchData(searchText || "Home Alone2");
    return response;
  }
);
console.log();
export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    clearState: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDataAsync.fulfilled, (state, action) => {
        state.status = "idle";
        console.log(action.payload);
        state.movies[0] = action.payload;
      })
      .addCase(fetchDataAsync.rejected, (state) => {
        state.status = "rejected";
        state.error = "error";
      });
  },
});

export const { clearState } = homeSlice.actions;
export const selectData = (state) => state.home.movies;
export const status = (state) => state.home.status;
export const error = (state) => state.home.error;
export default homeSlice.reducer;
