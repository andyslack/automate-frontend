import { API_URL } from '../services/config';
import ApiService from './api.service';

class ReportService {
  /** get activetab data */
  getActiveTabData(activeTab) {
    return ApiService.postData(API_URL + '/api/report/getActiveTabData', activeTab)
      .then(res => {
        return res;
      }, error => {
        return error;
      });
  }
}

export default new ReportService()