import BillingService from "../services/billing.service";

import {
  GETBILLINGDATA,
  GETSUBSCRIPTIONDATA,
  UPDATESUBSCRIPTIONITEMS,
  GETTRANSACTIONDATA
} from "./actionType";

import {
  SUCCESSGETBILLINGDATA,
  SUCCESSGETSUBSCRIPTIONDATA,
  SUCCESSUPDATESUBSCRIPTIONITEMS,
  SUCCESSGETTRANSACTIONDATA
} from "./mutationType";

const state = {
  billingData: {},
  subscriptionData: {},
  updateSubscriptionData: {},
  transactionData: {}
}

const actions = {
  [GETBILLINGDATA](context, data) {
    return BillingService.getBillingData(data)
      .then(res => {
        context.commit(SUCCESSGETBILLINGDATA, res);
        return Promise.resolve(res);
      }, error => {
        return new Promise.reject(error);
      });
  },
  [GETSUBSCRIPTIONDATA](context, data) {
    return BillingService.getSubscriptionData(data)
      .then(res => {
        context.commit(SUCCESSGETSUBSCRIPTIONDATA, res);
        return Promise.resolve(res);
      }, error => {
        return new Promise.reject(error);
      })
  },
  [UPDATESUBSCRIPTIONITEMS](context, data) {
    return BillingService.updateSubscriptionItems(data)
      .then(res => {
        context.commit(SUCCESSUPDATESUBSCRIPTIONITEMS, res);
        return Promise.resolve(res);
      }, error => {
        return new Promise.reject(error);
      })
  },
  [GETTRANSACTIONDATA](context, data) {
    return BillingService.getTransactionData(data)
      .then(res => {
        context.commit(SUCCESSGETTRANSACTIONDATA, res);
        return Promise.resolve(res);
      }, error => {
        return new Promise.reject(error);
      });
  }
}

const mutations = {
  [SUCCESSGETBILLINGDATA](data) {
    state.billingData = data;
  },
  [SUCCESSGETSUBSCRIPTIONDATA](data) {
    state.subscriptionData = data;
  },
  [SUCCESSUPDATESUBSCRIPTIONITEMS](data) {
    state.updateSubscriptionData = data;
  },
  [SUCCESSGETTRANSACTIONDATA](data) {
    state.transactionData = data;
  }
}

export default {
  state,
  actions,
  mutations
}