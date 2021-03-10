import covidService from '../../api/covid';

const SET_VACCINE_DATA = 'SET_VACCINE_DATA';

export const setVaccineData = (data) => ({
  type: SET_VACCINE_DATA,
  payload: data,
});

const initialState = {
  data: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_VACCINE_DATA: {
      const { payload } = action;
      const noVaccine = 37589262 - payload[0].cumulative_avaccine;
      return {
        ...state,
        data: [
          payload[0].cumulative_avaccine,
          payload[1].cumulative_cvaccine,
          noVaccine,
        ],
      };
    }
    default: {
      return state;
    }
  }
};

export const getVaccineStats = (userDate) => async (dispatch) => {
  try {
    const totalVaccinated = covidService.getVaccinationData(
      'canada',
      userDate,
      'avaccine',
    );
    const fullyVaccinated = covidService.getVaccinationData(
      'canada',
      userDate,
      'cvaccine',
    );

    const responses = await Promise.all([totalVaccinated, fullyVaccinated]);
    console.log(responses);

    dispatch(setVaccineData(responses));
  } catch (error) {
    console.log(error);
  }
};
