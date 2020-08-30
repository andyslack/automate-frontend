import auth from './auth.module'
import dashboard from './dashboard.module'
import email from './email.module'
import user from './user.module'
import reports from './reports.module'
import account from './account.module'
import notification from './notification.module'
import credwordpress from './credwordpress.module'
import task from './task.module'
import billing from './billing.module'
import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger';

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production';
const plugins = debug ? [createLogger({})] : [];

export default new Vuex.Store({
    modules: {
      auth,
      dashboard,
      email,
      user,
      reports,
      account,
      notification,
      credwordpress,
      billing,
      task
    },
    strict: debug,
    plugins
});