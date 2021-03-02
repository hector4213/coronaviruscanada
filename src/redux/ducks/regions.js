import covidService from '../../api/covid';

const FETCH_REGION_SUMMARY = 'FETCH_REGION_SUMMARY';
const HAS_SELECTED = 'HAS_SELECTED';
const CLEAR_SELECTION = 'CLEAR_SELECTION';
const REGION_SELECT = 'REGION_SELECT';

export const fetchRegionData = (regionSummary) => ({
  type: FETCH_REGION_SUMMARY,
  payload: regionSummary,
});

export const clearRegionSummary = () => ({
  type: CLEAR_SELECTION,
  payload: false,
});

export const userHasSelected = (bool) => ({
  type: HAS_SELECTED,
  payload: bool,
});

export const regionSelect = (regionCode) => ({
  type: REGION_SELECT,
  payload: regionCode,
});

const initialState = {
  regionData: null,
  hasSelected: false,
  selectedRegion: null,
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
    case REGION_SELECT: {
      return { ...state, selectedRegion: action.payload };
    }
    default: {
      return state;
    }
  }
};

export const getRegionSummary = (region, userDate) => async (dispatch) => {
  try {
    const regionSummaries = await covidService.getRegionSummary(
      region,
      userDate,
    );
    dispatch(fetchRegionData(regionSummaries));
    dispatch(userHasSelected(true));
  } catch (error) {
    console.log(error);
  }
};
