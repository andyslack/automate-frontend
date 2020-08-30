import { API_URL } from '../services/config';
import ApiService from './api.service';

class BillingService {

  /** get billing data */
  getBillingData(data) {
    return ApiService.postData(API_URL + '/api/account/getBillingData', data)
      .then(res => {
        return res;
      }, error => {
        return error;
      });
  }

  /** get subscription data */
  getSubscriptionData(data) {
    return ApiService.postData(API_URL + '/api/account/getSubscriptionData', data)
      .then(res => {
        return res;
      }, error => {
        return error;
      });
  }

  /** update subscription data */
  updateSubscriptionItems(data) {
    return ApiService.putData(API_URL + '/api/subscriptions/items/update', data)
      .then(res => {
        return res;
      }, error => {
        return error;
      });
  }

  /** get transaction data */
  getTransactionData(data) {
    return ApiService.postData(API_URL + '/api/account/billing/getTransactionData', data)
      .then(res => {
        return res;
      }, error => {
        return error;
      });
  }
}

export default new BillingService()