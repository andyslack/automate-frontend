import axios from 'axios';
import { API_URL } from '../services/config';

class AuthService {
  login(user) {
    return axios
      .post(API_URL + '/api/login', user)
      .then(response => {
        if (response && response.data) {
          localStorage.setItem('token', JSON.stringify(response.data.token));
          localStorage.setItem('user', JSON.stringify(response.data.user))
        }
        return response;
      }, error => {
          return error;
      });
  }
}

export default new AuthService();