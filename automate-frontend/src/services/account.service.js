import { API_URL } from '../services/config';
import ApiService from './api.service';

class AccountService {
  /** get account overview data */
  getAccountOverview(user) {
    return ApiService.postData(API_URL + '/api/account/getAccountOverview', user)
      .then(res => {
        return res;
      }, error => {
        return error;
      });
  }

  /** get account users data */
  getAccountUsers(user) {
    return ApiService.postData(API_URL + '/api/account/getAccountUsers', user)
      .then(res => {
        return res;
      }, error => {
        return error;
      })
  }

  /** delete user */
  deleteUser(data) {
    return ApiService.deleteData(API_URL + '/api/users/delete', data)
      .then(res => {
        return res;
      }, error => {
        return error;
      })
  }

  /** add user */
  addUser(data) {
    return ApiService.postData(API_URL + '/api/users/add', data)
      .then(res => {
        return res;
      }, error => {
        return error;
      })
  }
}

export default new AccountService()