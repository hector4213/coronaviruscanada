import axios from 'axios';

const baseURL = 'https://www.mapquestapi.com/search/v2/radius';

const findHospitals = async (coords) => {
  console.log(origin);
  const response = await axios.get(baseURL, {
    params: {
      origin: `${coords[0]},${coords[1]}`,
      units: 'k',
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
