import { configureStore } from '@reduxjs/toolkit';
import summarySlice from './ducks/summarySlice';
import infoSlice from './ducks/infoSlice';
import regionSlice from './ducks/regionSlice';
import vaccineChartSlice from './ducks/vaccineChartSlice';
import casesChartSlice from './ducks/casesChartSlice';
import vaccineGapSlice from './ducks/vaccineGapSlice';
import mapSlice from './ducks/mapSlice';
import userSlice from './ducks/userSlice';

export default configureStore({
  reducer: {
    summaries: summarySlice,
    regionSummaries: regionSlice,
    appData: infoSlice,
    vaccineData: vaccineChartSlice,
    casesData: casesChartSlice,
    vaccineGap: vaccineGapSlice,
    map: mapSlice,
    user: userSlice,
  },
});
