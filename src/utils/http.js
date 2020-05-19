import axios from 'axios'
const instance = axios.create({
  baseURL: 'http://dengheng.top:2222',
  timeout: 10000,
  xhrFields: { withCredentials: true}
});
export default instance