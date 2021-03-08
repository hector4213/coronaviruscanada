import covidService from '../../api/covid';

const FETCH_DATE_TRENDS = 'FETCH_DATE_TRENDS';

export const fetchChartData = (data) => ({
  type: FETCH_DATE_TRENDS,
  payload: data,
});

const initialState = {
  labels: [],
  data: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATE_TRENDS: {
      return {
        ...state,
        labels: [...action.payload.map((item) => item.province)],
        data: [...action.payload.map((item) => item.cumulative_cases)],
      };
    }
    default: {
      return state;
    }
  }
};

export const getProvTrendsByDate = (prov, userDate) => async (dispatch) => {
  try {
    const trendData = await covidService.getProvincesChartData(prov, userDate);
    dispatch(fetchChartData(trendData));
  } catch (error) {
    console.log(error);
  }
};
