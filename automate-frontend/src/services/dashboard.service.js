import { API_URL } from '../services/config';
import ApiService from './api.service';

class DashboardService {
  /** get all data in dashboard */
  getStats(user) {
    return ApiService.postData(API_URL + '/api/getStats', user)
      .then(res => {
        return res;
      }, error => {
        return error;
      });
  }

  /** get task by 3 filter types */
  getTaskByFilter(filterData) {
    return ApiService.postData(API_URL + '/api/getTaskByFilter', filterData)
      .then(res => {
        return res;
      }, error => {
        return error;
      });
  }

  /** get search result in dashboard page */
  getSearch(searchData) {
    return ApiService.postData(API_URL + '/api/getSearch', searchData)
      .then(res => {
        return res;
      }, error => {
        return error;
      });
  }
}

export default new DashboardService()