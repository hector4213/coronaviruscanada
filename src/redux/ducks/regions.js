import covidService from '../../api/covid';

const FETCH_REGION_SUMMARY = 'FETCH_REGION_SUMMARY';
const HAS_SELECTED = 'HAS_SELECTED';
const CLEAR_SELECTION = 'CLEAR_SELECTION';

export const fetchRegionData = (regionSummary) => ({
  type: FETCH_REGION_SUMMARY,
  payload: regionSummary,
});

export const clearSummary = () => ({
  type: CLEAR_SELECTION,
  payload: false,
});

export const hasSelected = () => ({
  type: HAS_SELECTED,
  payload: true,
});

const initialState = {
  regionData: null,
  hasSelected: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REGION_SUMMARY: {
      return { ...state, regionData: action.payload };
    }
    case CLEAR_SELECTION: {
      return { ...state, hasSelected: action.payload };
    }
    case HAS_SELECTED: {
      return { ...state, hasSelected: action.payload };
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
    dispatch(hasSelected());
  } catch (error) {
    console.log(error);
  }
};
