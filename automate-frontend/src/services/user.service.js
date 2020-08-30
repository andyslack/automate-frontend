import { API_URL } from "../services/config";
import ApiService from "./api.service";
import axios from 'axios';

class UserService {
  /** install user */
  installUser(userData) {
    return axios
      .post(API_URL + '/api/installUser', userData)
      .then(response => {
        return response;
      }, error => {
          return error;
      });
  }

  /** update user */
  updateUser(data) {
    return ApiService.putData(API_URL + '/api/users/update', data)
      .then(res => {
        return res;
      }, error => {
        return error;
      });
  }
}

export default new UserService()