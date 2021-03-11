import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import covidService from '../../api/covid';

export const getVersionDate = createAsyncThunk(
  'info/getVersionDate',
  async () => {
    const date = await covidService.getAPIVersion();
    return date;
  },
);

const initialState = {
  apiLastUpdated: '',
  apiStartDate: '2020-09-01',
};

const infoSlice = createSlice({
  name: 'info',
  initialState,
  reducers: {},
  extraReducers: {
    [getVersionDate.fulfilled]: (state, { payload }) => {
      state.apiLastUpdated = payload;
    },
  },
});

export default infoSlice.reducer;
