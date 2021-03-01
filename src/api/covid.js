import axios from 'axios';

const baseURL = 'https://api.opencovid.ca/summary';

const getSummaries = async () => {
  const response = await axios.get(baseURL);
  const { summary } = response.data;
  return summary;
};

const getRegionSummary = async (provinceCode, userDate = '') => {
  const response = await axios.get(baseURL, {
    params: {
      loc: provinceCode,
      date: userDate,
    },
  });
  const [regionSummary] = response.data.summary;
  return regionSummary;
};

const getSummaryByDate = async (userDate) => {
  const response = await axios.get(baseURL, {
    params: {
      date: userDate,
    },
  });

  return response.data.summary;
};

const getProvinceSummary = async (provCode, userDate = '') => {
  const response = await axios.get(baseURL, {
    params: {
      loc: provCode,
      date: userDate,
    },
  });
  const [provinceSummary] = response.data.summary;
  return provinceSummary;
};

export default {
  getSummaries,
  getRegionSummary,
  getSummaryByDate,
  getProvinceSummary,
};
