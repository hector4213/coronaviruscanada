import axios from 'axios';

const baseURL = 'https://www.mapquestapi.com/search/v2/radius';

const findHospitals = async (origin) => {
  console.log(origin);
  const response = await axios.get(baseURL, {
    params: {
      origin: `${origin[0]}, ${origin[1]}`,
      radius: 50,
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
