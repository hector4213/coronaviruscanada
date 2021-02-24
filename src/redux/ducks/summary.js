import covidService from '../../api/covid';

const FETCH_SUMMARIES = 'FETCH_SUMMARIES';
const DATA_SUCCESS = 'DATA_SUCCESS';
const DATA_ERROR = 'DATA_ERROR';
const CHANGE_DATE = 'CHANGE_DATE';

const today = new Date().toISOString().substr(0, 10);

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

const initialState = {
  summaries: [],
  isLoading: true,
  currentDate: today,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUMMARIES: {
      return { ...state, summaries: action.payload };
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
    default:
      return state;
  }
};

export const getSummaries = () => async (dispatch) => {
  try {
    const summaries = await covidService.getSummaries();
    dispatch(fetchSummaries(summaries));
    dispatch(dataLoaded());
  } catch (error) {
    dispatch(dataError());
  }
};

export const changeSummaryDate = (provCode, userDate) => async (dispatch) => {
  try {
    const specificSummary = await covidService.getSummaryByDate(
      provCode,
      userDate,
    );
    dispatch(userChangedDate(specificSummary));
  } catch (error) {
    dispatch(dataError());
  }
};
