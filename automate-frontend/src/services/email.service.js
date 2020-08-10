import { API_URL } from '../services/config';
import ApiService from './api.service';

class EmailService {
  /** get email logs in email/logs page */
  getEmailLogs(user) {
    return ApiService.postData(API_URL + '/api/getEmailLogs', user)
      .then(res => {
        return res;
      }, error => {
        return error;
      });
  }

  /** get email stats email/stats page */
  getEmailStats(user) {
    return ApiService.postData(API_URL + '/api/getEmailStats', user)
      .then(res => {
        return res;
      }, error => {
        return error;
      });
  }
}

export default new EmailService()