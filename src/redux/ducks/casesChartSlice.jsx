import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import covidService from '../../api/covid';

export const getWeekSummaryCanada = createAsyncThunk(
  'cases/getWeekSummary',
  async ({ before, after }) => {
    const weekData = await covidService.getWeeklySummary(before, after);
    return weekData;
  },
);

const initialState = {
  vaccinations: [],
  cases: [],
  deaths: [],
};

const casesSlice = createSlice({
  name: 'cases',
  initialState,
  reducers: {},
  extraReducers: {
    [getWeekSummaryCanada.fulfilled]: (state, { payload }) => {
      state.vaccinations = payload.map((data) => data.avaccine);
      state.cases = payload.map((data) => data.active_cases);
      state.deaths = payload.map((data) => data.deaths);
    },
  },
});

export default casesSlice.reducer;
