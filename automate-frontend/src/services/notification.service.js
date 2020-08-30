import { API_URL } from "../services/config";
import axios from 'axios';

class NotificationService {
  /** update notification */
  updateNotification(notificationData) {
    return axios
      .put(API_URL + '/api/users/notifications/update', notificationData)
      .then(response => {
        return response;
      }, error => {
        return error;
      });
  }
}

export default new NotificationService()