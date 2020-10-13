import ApiService from "@/core/services/api.service";
import JwtService from "@/core/services/jwt.service";
// import axios from "axios";

// action types
export const VERIFY_AUTH = "verifyAuth";
export const LOGIN = "login";
export const LOGOUT = "logout";
export const REGISTER = "register";
export const UPDATE_USER = "updateUser";

// mutation types
export const PURGE_AUTH = "logOut";
export const SET_AUTH = "setUser";
export const SET_ERROR = "setError";
export const SET_PLAN = "setplan"

const state = {
  errors: null,
  user: {},
  plan: null,
  userId: null,
  isAuthenticated: !!JwtService.getToken()
};

const getters = {
  currentUser(state) {
    return state.user;
  },
  getPlan(state){
    return state.plan
  },
  isAuthenticated(state) {
    return state.isAuthenticated;
  }
};

const actions = {
  [LOGIN](context, credentials) {
    return new Promise(resolve => {
      console.log(credentials)
      ApiService.post("login/", credentials)
        .then(({ data }) => {
          console.log(data)
          resolve(data);
        })
        .catch(({ response }) => {
          console.log(response);
          // context.commit(SET_ERROR, response.data.errors);
        });
    });
  },
  [LOGOUT](context) {
    context.commit(PURGE_AUTH);
  },
  [REGISTER](context, credentials) {
    // console.log(credentials)
    const string = Math.random().toString(36).substring(2,5)
    return new Promise((resolve) => {
      ApiService.post("register", credentials).then(res => {
        const result = string + '*' +  res.data[1].id
        console.log(res)
        localStorage.setItem('value', result)
        context.commit(SET_AUTH, res);
        resolve(res)
      }).catch(error => {
        console.log(error)
      })
        // .then(({ data }) => {
        //   console.log(data)
        //   context.commit(SET_AUTH, data);
        //   resolve(data);
        // })
        // .catch(({ response }) => {
        //   // context.commit(SET_ERROR, response.data.errors);
        //   reject(response);
        // });
    });
  },
  [VERIFY_AUTH](context) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      console.log(state.userId)
      ApiService.get("verify")
        .then(({ data }) => {
          context.commit(SET_AUTH, data);
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data.errors);
        }); 
    } else {
      context.commit(PURGE_AUTH);
    }
  },
  [UPDATE_USER](context, payload) {
    const { email, username, password, image, bio } = payload;
    const user = { email, username, bio, image };
    if (password) {
      user.password = password;
    }

    return ApiService.put("user", user).then(({ data }) => {
      context.commit(SET_AUTH, data);
      return data;
    });
  },
};

const mutations = {
  [SET_ERROR](state, error) {
    state.errors = error;
  },
  [SET_AUTH](state, user) {
    console.log("user", user)
    state.isAuthenticated = true;
    state.user = user;
    state.errors = {};
    state.userId = user.data[1].id
    JwtService.saveToken(`Bearer ${user.data[0]}`);
    localStorage.setItem('role', `${state.plan}`)
  },
  [PURGE_AUTH](state) {
    state.isAuthenticated = false;
    state.user = {};
    state.errors = {};
    localStorage.clear();
    JwtService.destroyToken();
  },
  [SET_PLAN](state, plan) {
    state.plan = plan;
    // state.errors = {};
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
