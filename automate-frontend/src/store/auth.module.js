import {
    LOGIN,
} from './actionType';
import {
    SUCCESSLOGIN,
    LOGINFAILURE,
} from './mutationType';
import AuthService from '../services/auth.service';

const user = localStorage.getItem('user');

const initialState = user
  ? { status: {loggedIn: true}, user }
  : { status: {loggedIn: false}, user: null } 

const state = {
  initialState
}

const actions = {
  [LOGIN](context, user) {
    return AuthService.login(user)
    .then(res => {
      if (res) {
        context.commit(SUCCESSLOGIN, res);
        return Promise.resolve(res);
      } else {
          context.commit(LOGINFAILURE);
      }
    }, error => {
      context.commit(LOGINFAILURE);
      return new Promise.reject(error);
    });
  }
}

const mutations = {
  [SUCCESSLOGIN](state, response) {
    state.initialState.status.loggedIn = true;
    state.initialState.user = response.data.user;
  },
  [LOGINFAILURE](state) {
    state.initialState.status.loggedIn = false;
    state.initialState.user = null;
  },
}

export default {
  state,
  actions,
  mutations,
}