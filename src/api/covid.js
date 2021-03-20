import axios from 'axios';

const baseURL = 'https://api.opencovid.ca/summary';
const versionURL = 'https://api.opencovid.ca/version';
const chartURL = 'https://api.opencovid.ca/timeseries';

//  Fetches summaries for date of today for card grid data

const getSummaries = async () => {
  const response = await axios.get(baseURL);
  const { summary } = response.data;
  return summary;
};

//  Fetches Summary for region with provided date

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

//  Fetches individual province summary

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

// Fetches date when API was last updated

const getAPIVersion = async () => {
  const response = await axios.get(versionURL);
  const { version } = response.data;
  const date = version.substring(0, 10);
  return date;
};

//  Fetches summary for todays date of canadas vaccination progress (user does not change)

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

//  Fetches stat provided for provinces, this case will use vaccines delivered and vaccine administered

const getVaccStats = async (date) => {
  const response = await axios.get(baseURL, {
    params: {
      date,
    },
  });
  const noRepatriated = response.data.summary.filter(
    (item) => item.province !== 'Repatriated',
  );
  return noRepatriated;
};
// Fetches summary per province administered / distributed

const getWeeklySummary = async (before, after) => {
  const response = await axios.get(baseURL, {
    params: {
      loc: 'canada',
      before,
      after,
    },
  });
  return response.data.summary;
};

export default {
  getSummaries,
  getRegionSummary,
  getProvinceSummary,
  getAPIVersion,
  getVaccinationData,
  getWeeklySummary,
  getVaccStats,
};
