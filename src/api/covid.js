import axios from 'axios';

const getData = async () => {
  const response = await axios.get('https://api.opencovid.ca/summary');
  return response.data;
};

export default {
  getData,
};
