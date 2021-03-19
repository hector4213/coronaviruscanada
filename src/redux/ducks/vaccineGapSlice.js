import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import covidService from '../../api/covid';

export const getVaccineStats = createAsyncThunk(
  'vaccineGap/getVaccineStats',
  async () => {
    const vaccineData = covidService.getVaccStats('2021-03-18');
    return vaccineData;
  },
);

const initialState = {
  currentDate: '',
  labels: [],
  distributed: [],
  administered: [],
};

const vaccineGapSlice = createSlice({
  name: 'vaccineGap',
  initialState,
  reducers: {},
  extraReducers: {
    [getVaccineStats.fulfilled]: (state, { payload }) => {
      state.labels = payload.map((item) => item.province);
      state.distributed = payload.map((item) => item.dvaccine);
      state.administered = payload.map((item) => item.avaccine);
    },
  },
});

export default vaccineGapSlice.reducer;
