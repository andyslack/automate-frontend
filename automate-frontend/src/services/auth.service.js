import axios from 'axios';
import { API_URL } from '../services/config';

class AuthService {
  login(user) {
    return axios
      .post(API_URL + '/login/token', user)
      .then(response => {
        if (response && response.data) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response;
      }, error => {
          return error;
      });
  }
}

export default new AuthService();