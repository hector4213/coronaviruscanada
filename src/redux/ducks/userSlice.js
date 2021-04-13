import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fireApi from '../../firebase/fireApi';

export const getAppointments = createAsyncThunk(
  'user/getAppointments',
  async (userId) => {
    const appointments = await fireApi.fetchAppointments(userId);
    return appointments;
  },
);

export const createAppointment = createAsyncThunk(
  'user/createAppointment',
  async (obj) => {
    await fireApi.createAppointment(obj);
    return obj;
  },
);

export const deleteAppointment = createAsyncThunk(
  'user/deleteAppoinments',
  async (id) => {
    const deletedAppointmentId = fireApi.deleteAppointment(id);
    return deletedAppointmentId;
  },
);

export const initialState = {
  currentUser: null,
  appointments: [],
  isFieldsError: false,
  errorMessage: '',
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
    removeAppointment: (state, { payload }) => {
      state.appoinments = state.appointments.filter(
        (appointment) => appointment.id !== payload,
      );
    },
    setError: (state, { payload }) => {
      state.isFieldsError = true;
      state.errorMessage = payload;
    },
  },
  extraReducers: {
    [getAppointments.fulfilled]: (state, { payload }) => {
      state.appointments = [...payload];
    },
    [createAppointment.fulfilled]: (state, { payload }) => {
      state.isFieldsError = false;
      state.errorMessage = '';
      state.appointments.push(payload);
    },
    [deleteAppointment.fulfilled]: (state, { payload }) => {
      state.appointments = state.appointments.filter(
        (appt) => appt.id !== payload,
      );
    },
  },
});

export const {
  setCurrentUser,
  addAppointment,
  removeppointment,
  setError,
} = userSlice.actions;

export default userSlice.reducer;
