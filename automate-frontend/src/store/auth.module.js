import {
    LOGIN,
} from './actionType';
import {
    SUCCESSLOGIN,
    LOGINFAILURE,
    LOGOUTSUCCCESS,
    SUCCESSREGISTER,
    REGISTERFAILURE,
} from './mutationType';
import AuthService from '../services/auth.service';

const user = JSON.parse(localStorage.getItem("user"));

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
        console.log("login response:", res);
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
  [SUCCESSLOGIN](state, user) {
    state.initialState.status.loggedIn = true;
    state.initialState.user = user.data;
  },
  [LOGINFAILURE](state) {
    state.initialState.status.loggedIn = false;
    state.initialState.user = null;
  },
}

const getters = {
  permission(state) {
    return state && state.initialState.user.user.role;
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}