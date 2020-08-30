import { API_URL } from "../services/config";
import ApiService from "./api.service";

class TaskService {

  /** get task detail data */
  getTaskDetailData(data) {
    return ApiService.postData(API_URL + '/api/task/getTaskData', data)
      .then(res => {
        return res;
      }, error => {
        return error;
      });
  }
}

export default new TaskService()