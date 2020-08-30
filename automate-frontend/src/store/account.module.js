import AccountService from "../services/account.service";

import {
    GETACCOUNTOVERVIEW,
    GETACCOUNTUSERS,
    DELETEUSER,
    ADDUSER
} from './actionType';

import {
    SUCCESSGETACCOUNTOVERVIEW,
    SUCCESSGETACCOUNTUSER,
    SUCCESSDELETEUSER,
    SUCCESSADDUSER
} from './mutationType';

const state = {
  accountOverView: {},
  accountUser: {},
  deleteUser: {},
  addUser: {}
}

const actions = {
    [GETACCOUNTOVERVIEW](context, user) {
      return AccountService.getAccountOverview(user)
        .then(res => {
          context.commit(SUCCESSGETACCOUNTOVERVIEW, res);
          return Promise.resolve(res);
        }, error => {
          return new Promise.reject(error);
        });
    },
    [GETACCOUNTUSERS](context, data) {
      return AccountService.getAccountUsers(data)
        .then(res => {
          context.commit(SUCCESSGETACCOUNTUSER, res);
          return Promise.resolve(res);
        }, error => {
          return new Promise.reject(error);
        })
    },
    [DELETEUSER](context, data) {
      return AccountService.deleteUser(data)
        .then(res => {
          context.commit(SUCCESSDELETEUSER, res);
          return Promise.resolve(res);
        }, error => {
          return new Promise.reject(error);
        })
    },
    [ADDUSER](context, data) {
      return AccountService.addUser(data)
        .then(res => {
          context.commit(SUCCESSADDUSER, res);
          return Promise.resolve(res);
        }, error => {
          return new Promise.reject(error);
        })
    }
}

const mutations = {
    [SUCCESSGETACCOUNTOVERVIEW](data) {
      state.accountOverView = data;
    },
    [SUCCESSGETACCOUNTUSER](data) {
      state.accountUser = data;
    },
    [SUCCESSDELETEUSER](data) {
      state.deleteUser = data;
    },
    [SUCCESSADDUSER](data) {
      state.addUser = data;
    }
}

export default {
    state,
    actions,
    mutations,
}