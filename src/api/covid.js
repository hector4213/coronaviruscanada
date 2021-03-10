import axios from 'axios';

const baseURL = 'https://api.opencovid.ca/summary';
const versionURL = 'https://api.opencovid.ca/version';
const chartURL = 'https://api.opencovid.ca/timeseries';

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

const getAPIVersion = async () => {
  const response = await axios.get(versionURL);
  const { version } = response.data;
  const date = version.substring(0, 10);
  return date;
};

const getProvincesChartData = async (prov, userDate) => {
  const response = await axios.get(chartURL, {
    params: {
      loc: prov,
      date: userDate,
    },
  });
  return response.data.cases.filter((item) => item.province !== 'Repatriated');
};

const getVaccinationData = async (prov, userDate, stat) => {
  const response = await axios.get(chartURL, {
    params: {
      loc: prov,
      date: userDate,
      stat,
    },
  });
};

export default {
  getSummaries,
  getRegionSummary,
  getSummaryByDate,
  getProvinceSummary,
  getAPIVersion,
  getProvincesChartData,
  getVaccinationData,
};
