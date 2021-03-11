import { configureStore } from '@reduxjs/toolkit';
import summarySlice from './ducks/summarySlice';
import infoSlice from './ducks/infoSlice';

export default configureStore({
  reducer: {
    summaries: summarySlice,
    appData: infoSlice,
  },
});
