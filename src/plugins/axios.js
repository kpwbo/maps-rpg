import axios from 'axios';

export default ({ Vue }) => {
  if (process.env.MODE === 'electron' && process.env.PROD) {
    axios.defaults.baseURL = process.env.ELECTRON_API_URL;
  }
  Vue.prototype.$axios = axios;
};
