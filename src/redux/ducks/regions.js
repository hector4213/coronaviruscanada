import covidService from '../../api/covid';

const FETCH_REGION_SUMMARY = 'FETCH_REGION_SUMMARY';
const CLEAR_REGION_SUMMARY = 'CLEAR_REGION_SUMMARY';
const CHANGE_REGION_SELECTION = 'CHANGE_REGION_SELECTION';

export const fetchRegionData = (regionSummary) => ({
  type: FETCH_REGION_SUMMARY,
  payload: regionSummary,
});

export const clearSummary = () => ({
  type: CLEAR_REGION_SUMMARY,
  payload: null,
});

const initialState = {
  regionData: null,
  currrentSelection: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REGION_SUMMARY: {
      return { ...state, regionData: action.payload };
    }
    case CLEAR_REGION_SUMMARY: {
      return { ...state, RegionData: null };
    }
    case CHANGE_REGION_SELECTION: {
      return { ...state, currrentSelection: action.payload };
    }
    default: {
      return state;
    }
  }
};

export const getRegionSummary = (region) => async (dispatch) => {
  try {
    const regionSummaries = await covidService.getRegionSummary(region);
    dispatch(fetchRegionData(regionSummaries));
  } catch (error) {
    console.log(error);
  }
};
