import axios from 'axios';
import authHeader from './auth.header';

class ApiService {
    postData(url, data) {
        return axios.post(url, data, { headers: authHeader() });
    }
    getData(url) {
        return axios.get(url, { headers: authHeader() });
    }
}

export default new ApiService();