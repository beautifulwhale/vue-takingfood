import {
  RECEIVE_ADDRESS,
  RECEIVE_FOODTYPES,
  RECEIVE_SHOPS
} from "./mutation-type.js";
import { reqLocation, reqFoodTypes, reqShops } from "../api/index";
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
    if (result.code === 0) {
      const shops = result.data;
      commit(RECEIVE_SHOPS, { shops });
    }
  }
};
