import axios from 'axios';

const baseURL = 'https://api.opencovid.ca/summary';

const getSummaries = async () => {
  const response = await axios.get(baseURL);
  const { summary } = response.data;
  return summary;
};

const getProvinceStats = async (provinceCode) => {
  const response = await axios.get(baseURL, {
    params: {
      loc: provinceCode,
    },
  });
  const { provinceData } = response.data;
  return provinceData;
};

export default {
  getSummaries,
  getProvinceStats,
};
