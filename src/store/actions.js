import {
  RECEIVE_ADDRESS,
  RECEIVE_FOODTYPES,
  RECEIVE_SHOPS,
  RECEIVE_USERINFO,
  RESET_USERINFO
} from "./mutation-type.js";
import {
  reqLocation,
  reqFoodTypes,
  reqShops,
  reqUserInfo,
  reqLogOut
} from "../api/index";
export default {
  //异步获取地址
  async getAddress({ commit, state }) {
    //发送Ajax请求
    const geohash = state.latitude + "," + state.longitude;
    const result = await reqLocation(geohash);
    //提交一个mutation
    if (result.code === 0) {
      const address = result.data;
      commit(RECEIVE_ADDRESS, { address });
    }
  },
  //异步获取食物类型
  async getFoodTypes({ commit }) {
    const result = await reqFoodTypes();
    if (result.code === 0) {
      const foodTypes = result.data;
      commit(RECEIVE_FOODTYPES, { foodTypes });
    }
  },
  //异步获取商家
  async getShops({ commit, state }) {
    const { latitude, longitude } = state;
    const result = await reqShops(longitude, latitude);
    if (result.code == 0) {
      const shops = result.data;
      commit(RECEIVE_SHOPS, { shops });
    }
  },
  //同步显示用户信息
  getUserInfo({ commit }, userInfo) {
    commit(RECEIVE_USERINFO, { userInfo });
  },
  //异步获取用户信息
  async getUserMsg({ commit }) {
    const result = await reqUserInfo();
    if (result.code === 0) {
      const userInfo = result.data;
      commit(RECEIVE_USERINFO, { userInfo });
    }
  },
  //异步退出
  async logout({ commit }) {
    const result = await reqLogOut();
    if (result.code === 0) {
      commit(RESET_USERINFO);
    }
  }
};
