import CredWordPressService from "../services/credWordPress.service";

import {
    GETCREDWORDPRESSDATA,
    UPDATEWEBSITES,
    DELETEWEBSITE
} from "./actionType";

import {
    SUCCESSGETCREDWORDPRESSDATA,
    SUCCESSUPDATEWEBSITES,
    SUCCESSDELETEWEBSITE
} from "./mutationType";

const state = {
    credWordPress: {},
    updateWebsite: {},
    deleteWebsite: {}
}

const actions = {
  [GETCREDWORDPRESSDATA](context, data) {
    return CredWordPressService.getData(data)
    .then(res => {
      context.commit(SUCCESSGETCREDWORDPRESSDATA, res);
      return Promise.resolve(res);
    }, error => {
      return new Promise.reject(error);
    });
  },
  [UPDATEWEBSITES](context, data) {
    return CredWordPressService.updateWebsites(data)
    .then(res => {
      context.commit(SUCCESSUPDATEWEBSITES, res);
      return Promise.resolve(res);
    }, error => {
      return new Promise.reject(error);
    })
  },
  [DELETEWEBSITE](context, data) {
    return CredWordPressService.deleteWebsite(data)
    .then(res => {
      context.commit(SUCCESSDELETEWEBSITE, res);
      return Promise.resolve(res);
    }, error => {
      return new Promise.reject(error);
    })
  }
}

const mutations = {
  [SUCCESSGETCREDWORDPRESSDATA](data) {
    state.credWordPress = data;
  },
  [SUCCESSUPDATEWEBSITES](data) {
    state.updateWebsite = data;
  },
  [SUCCESSDELETEWEBSITE](data) {
    state.deleteWebsite = data;
  }
}

export default {
    state,
    actions,
    mutations
}