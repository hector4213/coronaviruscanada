import axios from 'axios';

const baseURL = 'https://www.mapquestapi.com/search/v2/radius';

const findHospitals = async (origin) => {
  const response = await axios.get(baseURL, {
    params: {
      origin,
      radius: 50, // maybe let user be able to choose
      maxMatches: 10,
      ambiguities: 'ignore',
      hostedData: 'mqap.ntpois|group_sic_code=?|806202',
      key: `${process.env.REACT_APP_MAPQUEST_KEY}`,
    },
  });
  const { searchResults } = response.data;

  return searchResults;
};

export default {
  findHospitals,
};
