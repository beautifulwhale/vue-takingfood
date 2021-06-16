import {
  RECEIVE_ADDRESS,
  RECEIVE_FOODTYPES,
  RECEIVE_SHOPS,
  RECEIVE_USERINFO,
  RESET_USERINFO,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  RECEIVE_GOODS,
  INCREASE_FOOD_COUNT,
  DECREASE_FOOD_COUNT,
  CLEAR_CART
} from "./mutation-type.js";
import {
  reqLocation,
  reqFoodTypes,
  reqShops,
  reqUserInfo,
  reqLogOut,
  reqShopInfo,
  reqShopGoods,
  reqShopRatings,
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
  },
  // 异步获取商家信息
  async getShopInfo({ commit }) {
    const result = await reqShopInfo();
    if (result.code === 0) {
      const info = result.data;
      commit(RECEIVE_INFO, { info });
    }
  },

  // 异步获取商家评价列表
  async getShopRatings({ commit }, callback) {
    const result = await reqShopRatings();
    if (result.code === 0) {
      const ratings = result.data;
      commit(RECEIVE_RATINGS, { ratings });
      //数据更新了，通知一下组件 
      callback && callback();
    }
  },

  // 异步获取商家商品列表
  async getShopGoods({ commit }, callback) {
    const result = await reqShopGoods();
    if (result.code === 0) {
      const goods = result.data;
      commit(RECEIVE_GOODS, { goods });
      //数据更新了，通知一下组件
      callback && callback();
    }
  },

  //同步更新购物车食物的加减
  updataFoodCount({commit},{isAdd,food}){
    if(isAdd){
      commit(INCREASE_FOOD_COUNT,{food})
    }else{
      commit(DECREASE_FOOD_COUNT,{food})
    }
  },
  //同步清空购物车
  clearCart({commit}){
    commit(CLEAR_CART);
  }
};
