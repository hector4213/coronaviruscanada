import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import covidService from '../../api/covid';

export const getVaccineData = createAsyncThunk(
  'vaccineChart/getVaccineData',
  async (userDate) => {
    const responses = await Promise.all([
      covidService.getVaccinationData(userDate, 'avaccine'),
      covidService.getVaccinationData(userDate, 'cvaccine'),
    ]);
    const apiData = responses.map(
      (item) => item.cumulative_avaccine || item.cumulative_cvaccine,
    );
    const unVaccinated = 37589262 - apiData[1];
    const data = apiData.concat(unVaccinated);
    return data;
  },
);

const initialState = {
  stats: null,
};

const vaccineChartSlice = createSlice({
  name: 'vaccineChart',
  initialState,
  reducers: {},
  extraReducers: {
    [getVaccineData.fulfilled]: (state, { payload }) => {
      state.stats = payload;
    },
  },
});

export default vaccineChartSlice.reducer;
