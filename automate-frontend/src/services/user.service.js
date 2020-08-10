import { API_URL } from "../services/config";
import axios from 'axios';

class UserService {
  /** install user */
  installUser(userData) {
    return axios
      .post(API_URL + '/api/installUser', userData)
      .then(response => {
        return response
      }, error => {
          return error;
      });
  }
}

export default new UserService()