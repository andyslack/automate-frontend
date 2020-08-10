import EmailService from "../services/email.service"

import { 
  GETEMAILLOGS,
  GETEMAILSTATS
} from './actionType';

import {
    SUCCESSGETEMAILLOGS,
    SUCCESSGETEMAILSTATS
} from './mutationType';

const state = {
    emailLogs: {},
    emailStats: {}
};

const actions = {
  [GETEMAILLOGS](context, user) {
    return EmailService.getEmailLogs(user)
      .then(res => {
        context.commit(SUCCESSGETEMAILLOGS, res);
        return Promise.resolve(res);
      }, error => {
        return new Promise.reject(error);
      });
  },
  [GETEMAILSTATS](context, user) {
    return EmailService.getEmailStats(user)
      .then(res => {
        context.commit(SUCCESSGETEMAILSTATS, user);
        return Promise.resolve(res);
      }, error => {
        return new Promise.reject(error);
      });
  }
}

const mutations = {
  [SUCCESSGETEMAILLOGS](data) {
    state.emailLogs = data;
  },
  [SUCCESSGETEMAILSTATS](data) {
    state.emailStats = data;
  }
}

export default {
    state,
    actions,
    mutations,
}