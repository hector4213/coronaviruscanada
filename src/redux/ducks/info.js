import covidService from '../../api/covid';

const DATE_LAST_UPDATED = 'DATE_LAST_UPDATED';

export const fetchLatestAPIDate = (date) => ({
  type: DATE_LAST_UPDATED,
  payload: date,
});

const initialState = {
  apiLastUpdated: '',
  apiStartDate: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DATE_LAST_UPDATED: {
      return { ...state, apiLastUpdated: action.payload };
    }
    default: {
      return state;
    }
  }
};

export const fetchVersionDate = () => async (dispatch) => {
  try {
    const versionDate = await covidService.getAPIVersion();
    dispatch(fetchLatestAPIDate(versionDate));
  } catch (error) {
    console.log(error);
  }
};
