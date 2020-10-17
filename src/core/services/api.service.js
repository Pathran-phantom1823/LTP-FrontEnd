import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import JwtService from "@/core/services/jwt.service";

/**
 * Service to call HTTP request via Axios
 */
const config = {
  headers: {
    "Authorization": `${JwtService.getToken()}`,
    "Access-Control-Allow-Origin": "*",
    // "Content-type": "multipart/form-data"
    // "Content-type": "app lication/json"
  }
};
const config2 = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    // "Content-type": "application/json"
  }
};
const ApiService = {
  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = JwtService.getToken() !== null ? "http://localhost:8003/ltp" : "http://localhost:8003/api/";
  },


  /**
   * Set the default HTTP request headers
   */
  setHeader() {
    Vue.axios.defaults.headers.common[
      "Authorization"
    ] = `${JwtService.getToken()}`;
  },

  /**
   * Set the POST HTTP request
   * @param resource
   * @param params
   * @returns {*}
   */

  query(resource, params) {
    let header = config.headers.Authorization === "null" ? config : config2
    console.log('param', header)
    return Vue.axios.get(`${resource}`, params, header)
  },

  

  /**
   * Send the GET HTTP request
   * @param resource
   * @param slug
   * @returns {*}
   */
  get(resource, slug= "") {
    // console.log(resource, slug)
    return Vue.axios.get(`${resource}/${slug}`, config)
  },


/**
   * Set the POST HTTP request
   * @param resource
   * @param params
   * @returns {*}
   * @constructor
   */
  getById(resource, params){
    let header = config.headers.Authorization === "null" ? config2 : config
    console.log('headers', header)
    return Vue.axios.get(`${resource}`, params, header);
  },

  /**
   * Set the POST HTTP request
   * @param resource
   * @param params
   * @returns {*}
   */
  post(resource, params) {
    let header = config.headers.Authorization === "null" ? config2 : config
    console.log('headers', header)
    return Vue.axios.post(`${resource}`, params, header);
  },

  /**
   * Send the UPDATE HTTP request
   * @param resource
   * @param slug
   * @param params
   * @returns {IDBRequest<IDBValidKey> | Promise<void>}
   */
  update(resource, slug, params) {
    return Vue.axios.put(`${resource}/${slug}`, params);
  },

  /**
   * Send the PUT HTTP request
   * @param resource
   * @param params
   * @returns {IDBRequest<IDBValidKey> | Promise<void>}
   */
  put(resource, params) {
    let header = config.headers.Authorization === "null" ? config2 : config
    console.log('headers', params)
    return Vue.axios.put(`${resource}`, params, header);
  },

  /**
   * Send the DELETE HTTP request
   * @param resource
   * @returns {*}
   */
  delete(resource) {
    return Vue.axios.delete(resource).catch(error => {
      // console.log(error);
      throw new Error(`[RWV] ApiService ${error}`);
    });
  }
};

export default ApiService;
