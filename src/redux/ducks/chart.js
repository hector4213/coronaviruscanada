import covidService from '../../api/covid';

const FETCH_DATE_TRENDS = 'FETCH_DATE_TRENDS';

export const fetchChartData = (data) => ({
  type: FETCH_DATE_TRENDS,
  payload: data,
});

const initialState = {
  labels: [],
  datasets: [
    {
      label: 'Active Cases',
      data: [],
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATE_TRENDS: {
      return { ...state };
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
