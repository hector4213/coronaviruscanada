import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fireApi from '../../firebase/fireApi';

export const getAppointments = createAsyncThunk(
  'user/getAppointments',
  async (userId) => {
    const appointments = fireApi.fetchAppointments(userId);
    return appointments;
  },
);

export const initialState = {
  currentUser: null,
  appointments: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (state, { payload }) => {
      state.currentUser = payload;
    },
    addAppointment: (state, { payload }) => {
      state.appointments.push(payload);
    },
  },
  extraReducers: {
    [getAppointments.fulfilled]: (state, { payload }) => {
      state.appointments = [...payload];
    },
  },
});

export const { setCurrentUser, addAppointment } = userSlice.actions;

export default userSlice.reducer;
