import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import covidService from '../../api/covid';
import fireApi from '../../firebase/fireApi';

export const getVersionDate = createAsyncThunk(
  'info/getVersionDate',
  async () => {
    const date = await covidService.getAPIVersion();
    return date;
  },
);

export const getAppProvinces = createAsyncThunk(
  'info/getAppProvinces',
  async () => {
    const appProvinces = await fireApi.fetchAppProvinces();
    return appProvinces;
  },
);

const initialState = {
  apiLastUpdated: '',
  apiStartDate: '2020-09-01',
  isLoading: false,
  provinceData: [],
};

const infoSlice = createSlice({
  name: 'info',
  initialState,
  reducers: {},
  extraReducers: {
    [getVersionDate.fulfilled]: (state, { payload }) => {
      state.apiLastUpdated = payload;
    },
    [getAppProvinces.fulfilled]: (state, { payload }) => {
      state.provinceData = payload;
      state.isLoading = false;
    },
    [getAppProvinces.pending]: (state) => {
      state.isLoading = true;
    },
  },
});

export default infoSlice.reducer;
