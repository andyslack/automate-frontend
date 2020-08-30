import { API_URL } from '../services/config';
import ApiService from './api.service';

class CredWordPressService {
  /** get all cred wordpress data */
  getData(data) {
    return ApiService.postData(API_URL + '/api/getCredWordPress', data)
      .then(res => {
        return res;
      }, error => {
        return error;
      });
  }

  /** update website data */
  updateWebsites(data) {
    return ApiService.putData(API_URL + '/api/users/websites/update', data)
      .then(res => {
        return res;
      }, error => {
        return error;
      });
  }

  /** delete website data */
  deleteWebsite(data) {
    return ApiService.deleteData(API_URL + '/api/users/websites/delete', data)
      .then(res => {
        return res;
      }, error => {
        return error;
      })
  }
}

export default new CredWordPressService()