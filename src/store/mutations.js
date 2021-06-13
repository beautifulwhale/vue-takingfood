import {
  RECEIVE_ADDRESS,
  RECEIVE_FOODTYPES,
  RECEIVE_SHOPS,
  RECEIVE_USERINFO,
  RESET_USERINFO,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  RECEIVE_GOODS
} from "./mutation-type.js";
export default {
  [RECEIVE_ADDRESS](state, { address }) {
    state.address = address;
  },
  [RECEIVE_FOODTYPES](state, { foodTypes }) {
    state.foodTypes = foodTypes;
  },
  [RECEIVE_SHOPS](state, { shops }) {
    state.shops = shops;
  },
  [RECEIVE_USERINFO](state, { userInfo }) {
    state.userInfo = userInfo;
  },
  [RESET_USERINFO](state) {
    state.userInfo = {};
  },

  [RECEIVE_INFO](state, { info }) {
    state.info = info;
  },
  [RECEIVE_RATINGS](state, { ratings }) {
    state.ratings = ratings;
  },
  [RECEIVE_GOODS](state, { goods }) {
    state.goods = goods;
  }
};
