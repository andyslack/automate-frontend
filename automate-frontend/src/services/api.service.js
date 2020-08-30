import axios from 'axios';
import authHeader from './auth.header';

class ApiService {
    postData(url, data) {
        return axios.post(url, data, { headers: authHeader() });
    }
    getData(url) {
        return axios.get(url, { headers: authHeader() });
    }
    putData(url, data) {
        return axios.put(url, data, { headers: authHeader() });
    }
    deleteData(url, data) {
        console.log("here api", data)
        return axios.delete(url, {
            data: data
        });
    }
}

export default new ApiService();
