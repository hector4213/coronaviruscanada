import axios from 'axios';

const baseURL = 'https://api.opencovid.ca/summary';
const versionURL = 'https://api.opencovid.ca/version';

const getSummaries = async () => {
  const response = await axios.get(baseURL);
  const { summary } = response.data;
  return summary;
};

const getRegionSummary = async (provinceCode) => {
  const response = await axios.get(baseURL, {
    params: {
      loc: provinceCode,
    },
  });
  const [regionSummary] = response.data.summary;
  return regionSummary;
};

const getSummaryByDate = async (prov, userDate) => {
  const response = await axios.get(baseURL, {
    params: {
      loc: prov,
      date: userDate,
    },
  });

  console.log(response.data.summary);
  return response.data.summary;
};

const getLastUpdated = async () => {
  const response = await axios.get(versionURL);
  return response.data;
};

export default {
  getSummaries,
  getRegionSummary,
  getSummaryByDate,
  getLastUpdated,
};
