import Vue from "vue";
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
  CLEAR_CART,
  RECEIVE_SEARCH_SHOPS
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
  },
  //购物车加食物
  [INCREASE_FOOD_COUNT](state, { food }) {
    if (!food.count) {
      Vue.set(food, "count", 1);
      //第一次添加食物到购物车的时候
      state.cartFoods.push(food);
    } else {
      food.count++;
    }
  },
  [DECREASE_FOOD_COUNT](state, { food }) {
    if (food.count) {
      food.count--;
      //当食物没有的时候清除购物车
      if (state.cartFoods === 0) {
        state.cartFoods.splice(state.cartFoods.indexOf(food), 1);
      }
    }
  },
  [CLEAR_CART](state) {
    //1.清空购物车food中的count
    state.cartFoods.forEach(food => (food.count = 0));
    //2.清空购物车中的所有项目
    state.cartFoods = [];
  },
  [RECEIVE_SEARCH_SHOPS](state, { searchShops }) {
    state.searchShops = searchShops;
  },
};
