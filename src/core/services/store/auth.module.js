import ApiService from "@/core/services/api.service";
import JwtService from "@/core/services/jwt.service";
// import axios from "axios";

import CryptoJS  from 'crypto-js';

// action types
export const VERIFY_AUTH = "verifyAuth";
export const LOGIN = "login";
export const LOGOUT = "logout";
export const REGISTER = "register";
export const UPDATE_USER = "updateUser";
export const Encrypt = "Encrypt";
export const Decrypt = "Decrypt";
export const CREATE_ROLE = "createRole";

// mutation types
export const PURGE_AUTH = "logOut";
export const SET_AUTH = "setUser";
export const SET_ERROR = "setError";
export const SET_PLAN = "setplan";
export const SET_ROLE = "setRole";


const state = {
  errors: null,
  user: {},
  plan: null,
  userId: null,
  isAuthenticated: !!JwtService.getToken(),
  encrypted: null,
  decrypted: null,
  role: null
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
  },
  getRole(state){
    return state.role
  }
};

const actions = {
  [LOGIN](context, credentials) {
    const string = Math.random().toString(36).substring(2,5)
    return new Promise(resolve => {
      ApiService.post("authenticate", credentials)
        .then(({ data }) => {
          if(data.status === 200){
            const result = string + '*' +  data.data[0].id
            localStorage.setItem('value', result)
            context.commit(SET_ROLE, data.data[0].roleType)
            context.commit(SET_AUTH, data);
            resolve(data);
          }
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
        localStorage.setItem('value', result)
        // context.commit(SET_AUTH, res);
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
      // const id = localStorage.getItem('value')
      // const userID = id.substr(id.lastIndexOf('*') + 1)
      // ApiService.post("verify", {id: userID})
      //   .then(({ data }) => {
      //     console.log(data)
      //   })
      //   .catch(({ response }) => {
      //     console.log(response)
      //   }); 
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
  [CREATE_ROLE](context, payload) {
    context.commit(SET_ROLE, payload)
  }
};

const mutations = {
  [SET_ERROR](state, error) {
    state.errors = error;
  },
  [SET_AUTH](state, user) {
    state.isAuthenticated = true;
    state.user = user;
    state.errors = {};
    // state.userId = user.data[1].id
    JwtService.saveToken(`Bearer ${user.data[0].token}`);
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
  },
  [Encrypt](state, text) {
    const passphrase = 'ltp';
    state.encrypted = CryptoJS.AES.encrypt(text, passphrase).toString();
  },
  [Decrypt](state, ciphertext){
    const passphrase = 'ltp';
    const bytes = CryptoJS.AES.decrypt(ciphertext, passphrase);
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    state.decrypted = originalText;
  },
  [SET_ROLE](state, role){
    const passphrase = 'ltp';
    state.role = CryptoJS.AES.encrypt(role, passphrase).toString();
    localStorage.setItem('role', `${state.role}`)
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
