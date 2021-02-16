import axios from 'axios';

const getData = async () => {
  const response = await axios.get('https://api.opencovid.ca/summary');
  const { summary } = response.data;
  return summary;
};

export default {
  getData,
};
