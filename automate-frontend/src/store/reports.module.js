import ReportService from "../services/report.service";

import {
    GETACTIVETABDATA
} from './actionType';
import {
    SUCCESSGETACTIVETABDATA
} from './mutationType'

const state = {
    tabData: {}
}

const actions = {
  [GETACTIVETABDATA](context, activetab) {
    return ReportService.getActiveTabData(activetab)
        .then(res => {
        context.commit(SUCCESSGETACTIVETABDATA, res);
        return Promise.resolve(res);
        }, error => {
        return new Promise.reject(error);
        });
  } 
}

const mutations = {
  [SUCCESSGETACTIVETABDATA](data) {
    state.tabData = data;
  }
}

export default {
  state,
  actions,
  mutations
}