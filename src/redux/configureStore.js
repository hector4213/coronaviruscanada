import { configureStore } from '@reduxjs/toolkit';
import summarySlice from './ducks/summarySlice';
import infoSlice from './ducks/infoSlice';
import regionSlice from './ducks/regionSlice';
import vaccineChartSlice from './ducks/vaccineChartSlice';

export default configureStore({
  reducer: {
    summaries: summarySlice,
    regionSummaries: regionSlice,
    appData: infoSlice,
    vaccineData: vaccineChartSlice,
  },
});
