import DashboardService from "../services/dashboard.service";

import { 
  GETSTATS,
  GETTASKBYFILTER,
  GETSEARCH
} from './actionType';
import {
  SUCCESSGETSTATE,
  SUCCESSGETTASKBYFILTER,
  SUCCESSGETSEARCH
} from './mutationType';

const state = {
    stats: {},
    filterStatus: {},
    search: {}
}

const actions = {
    [GETSTATS](context, user) {
      return DashboardService.getStats(user)
        .then(res => {
            context.commit(SUCCESSGETSTATE, res);
            return Promise.resolve(res);
        }, error => {
            return new Promise.reject(error);
        });
    },
    [GETTASKBYFILTER](context, filterData) {
      return DashboardService.getTaskByFilter(filterData)
        .then(res => {
          context.commit(SUCCESSGETTASKBYFILTER, res);
          return Promise.resolve(res);
        }, error => {
          return new Promise.reject(error);
        });
    },
    [GETSEARCH](context, search) {
      return DashboardService.getSearch(search)
        .then(res => {
          context.commit(SUCCESSGETSEARCH, res);
          return Promise.resolve(res);
        }, error => {
          return new Promise.reject(error);
        });
    }
}

const mutations = {
  [SUCCESSGETSTATE](data) {
    state.stats = data;
  },
  [SUCCESSGETTASKBYFILTER](data) {
    state.filterStatus = data
  },
  [SUCCESSGETSEARCH](data) {
    state.search = data
  }
}

const getters = {
}

export default {
    state,
    actions,
    mutations,
    getters
}