import covidService from '../../api/covid';

const FETCH_SUMMARIES = 'FETCH_SUMMARIES';
const DATA_SUCCESS = 'DATA_SUCCESS';
const DATA_ERROR = 'DATA_ERROR';
const CHANGE_DATE = 'CHANGE_DATE';
const SET_TODAY_DATE = 'SET_TODAY_DATE';
const FETCH_TODAY = 'FETCH_TODAY';
const FETCH_PROVINCE = 'FETCH_PROVINCE';

export const fetchSummaries = (summaries) => ({
  type: FETCH_SUMMARIES,
  payload: summaries,
});

export const dataLoaded = () => ({
  type: DATA_SUCCESS,
  payload: false,
});
export const dataError = () => ({
  type: DATA_ERROR,
  payload: true,
});

export const userChangedDate = (datedSummary) => ({
  type: CHANGE_DATE,
  payload: datedSummary,
});

export const setTodayDate = (currDate) => ({
  type: SET_TODAY_DATE,
  payload: currDate,
});

export const fetchTodaySummaries = (summaries) => ({
  type: FETCH_TODAY,
  payload: summaries,
});

export const fetchProvinceData = (summary) => ({
  type: FETCH_PROVINCE,
  payload: summary,
});

const initialState = {
  summaries: [],
  currentProvince: '',
  isLoading: true,
  currentDate: '',
  today: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROVINCE: {
      return { ...state, currentProvince: action.payload };
    }
    case DATA_SUCCESS: {
      return { ...state, isLoading: action.payload };
    }
    case DATA_ERROR: {
      return { ...state, isLoading: action.payload };
    }
    case CHANGE_DATE: {
      return { ...state, summaries: action.payload };
    }
    case SET_TODAY_DATE: {
      return { ...state, currentDate: action.payload };
    }
    case FETCH_TODAY: {
      return { ...state, today: action.payload };
    }
    default:
      return state;
  }
};

export const changeSummaryDate = (userDate) => async (dispatch) => {
  try {
    const specificSummary = await covidService.getSummaryByDate(userDate);
    dispatch(userChangedDate(specificSummary));
    dispatch(dataLoaded());
  } catch (error) {
    dispatch(dataError());
  }
};

export const fetchTodaySummary = () => async (dispatch) => {
  try {
    const todayData = await covidService.getSummaries();
    dispatch(fetchTodaySummaries(todayData));
    dispatch(dataLoaded());
  } catch (error) {
    dispatch(dataError());
  }
};

export const fetchProvinceSummary = (provCode, userDate) => async (
  dispatch,
) => {
  try {
    const summary = await covidService.getProvinceSummary(provCode, userDate);
    dispatch(fetchProvinceData(summary));
    dispatch(setTodayDate(summary.date.split('-').reverse().join('-')));
  } catch (error) {
    dispatch(dataError());
  }
};
