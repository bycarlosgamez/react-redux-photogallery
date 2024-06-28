import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export const usersReducer = userSlice.reducer;
