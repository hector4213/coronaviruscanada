import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import covidService from '../../api/covid';

export const getVaccineStats = createAsyncThunk(
  'vaccineGap/getVaccineStats',
  async (date) => {
    const vaccineData = covidService.getVaccStats(date);
    return vaccineData;
  },
);

const initialState = {
  currentDate: '',
  labels: null,
  distributed: null,
  administered: null,
  isLoading: true,
};

const vaccineGapSlice = createSlice({
  name: 'vaccineGap',
  initialState,
  reducers: {
    setInitDate: (state, { payload }) => {
      state.currentDate = payload;
    },
  },
  extraReducers: {
    [getVaccineStats.fulfilled]: (state, { payload }) => {
      state.labels = payload.map((item) => item.province);
      state.distributed = payload.map((item) => item.cumulative_dvaccine);
      state.administered = payload.map((item) => item.cumulative_avaccine);
      state.isLoading = false;
    },
  },
});

export const { setInitDate } = vaccineGapSlice.actions;

export default vaccineGapSlice.reducer;
