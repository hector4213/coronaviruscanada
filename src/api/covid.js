import axios from 'axios';

const baseURL = 'https://api.opencovid.ca/summary';
const versionURL = 'https://api.opencovid.ca/version';
const chartURL = 'https://api.opencovid.ca/timeseries';

const getSummaries = async () => {
  const response = await axios.get(baseURL);
  const { summary } = response.data;
  return summary;
};

const getRegionSummary = async (regionCode, userDate) => {
  const response = await axios.get(baseURL, {
    params: {
      loc: regionCode,
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

const getProvinceSummary = async (provCode, userDate) => {
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

const getVaccinationData = async (userDate, stat) => {
  const response = await axios.get(chartURL, {
    params: {
      loc: 'canada',
      date: userDate,
      stat,
    },
  });
  const stats = response.data[stat];
  const [vaccineStat] = stats;

  return vaccineStat;
};

const getWeeklySummary = async (before, after) => {
  const response = await axios.get(baseURL, {
    params: {
      before,
      after,
    },
  });
  return response.data.summary;
};

export default {
  getSummaries,
  getRegionSummary,
  getSummaryByDate,
  getProvinceSummary,
  getAPIVersion,
  getVaccinationData,
  getWeeklySummary,
};
