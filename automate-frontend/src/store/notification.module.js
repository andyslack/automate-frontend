import NotificationService from "../services/notification.service";

import { UPDATENOTIFICATION } from "./actionType";

import { SUCCESSUPDATENOTIFICATION } from "./mutationType";

const state = {
    notification: {},
}

const actions = {
  [UPDATENOTIFICATION](context, notificationData) {
    return NotificationService.updateNotification(notificationData)
      .then(res => {
        context.commit(SUCCESSUPDATENOTIFICATION, res)
        return Promise.resolve(res);
      }, error => {
        return new Promise.reject(error);
      });
  }
}

const mutations = {
  [SUCCESSUPDATENOTIFICATION](data) {
    state.notification = data;
  },
}

export default {
  state,
  actions,
  mutations
}