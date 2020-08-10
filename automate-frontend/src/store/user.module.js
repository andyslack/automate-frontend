import UserService from "../services/user.service";

import { 
  INSTALLUSER
} from './actionType';

import {
  SUCCESSINSTALLUSER
} from './mutationType'

const state = {
  installUser: {}
}

const actions = {
  [INSTALLUSER](context, userData) {
    return UserService.installUser(userData)
      .then(res => {
        context.commit(SUCCESSINSTALLUSER, res)
        return Promise.resolve(res);
      }, error => {
        return new Promise.reject(error);
      });
  }
}

const mutations = {
  [SUCCESSINSTALLUSER](data) {
    state.installUser = data;
  }
}

export default {
  state,
  actions,
  mutations
}