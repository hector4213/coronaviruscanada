import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fireApi from '../../firebase/fireApi';

export const signupUser = createAsyncThunk(
  'user/signup',
  async ({ email, password }) => {
    const signup = await fireApi.signup(email, password);
    return signup;
  },
);

export const loginUser = createAsyncThunk(
  'user/login',
  async ({ email, password }) => {
    const user = await fireApi.login(email, password);
    return user;
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
