import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fireApi from '../../firebase/fireApi';

export const signupUser = createAsyncThunk(
  'user/signup',
  async ({ email, password }) => {
    const register = fireApi.signup(email, password);
  },
);

const initialState = {
  currentUser: null,
  appointments: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {},
});

export default userSlice.reducer;
