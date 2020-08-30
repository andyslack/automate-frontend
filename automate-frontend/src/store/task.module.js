import TaskService from "../services/task.service";

import {
    GETTASKDETAILDATA
} from './actionType';

import {
    SUCCESSGETTASKDETAILDATA
} from "./mutationType";

const state = {
    taskDetail: {},
}

const actions = {
    [GETTASKDETAILDATA](context, data) {
        return TaskService.getTaskDetailData(data)
            .then(res => {
                context.commit(SUCCESSGETTASKDETAILDATA, res);
                return Promise.resolve(res);
            }, error => {
                return new Promise.reject(error);
            });
    }
}

const mutations = {
    [SUCCESSGETTASKDETAILDATA](data) {
        state.taskDetail = data;
    },
}

export default {
    state,
    actions,
    mutations
}