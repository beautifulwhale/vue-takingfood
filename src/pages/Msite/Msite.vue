<template>
  <div class="msite">
    <!-- 头部 -->
    <HeaderTop :title="address.name">
      <router-link class="searcht" slot="left" to="/search"
        ><i class="iconfont icon-search"></i
      ></router-link>
      <router-link
        class="header_title_text1"
        style="color:white"
        :to="userInfo._id ? '/userinfo' : 'login'"
        slot="right"
      >
        <span v-if="!userInfo._id">登录/注册</span>
        <span class="header_title_text1" style="margin-left:-10px" v-else
          ><i class="iconfont icon-gerendenglu"></i
        ></span>
      </router-link>
    </HeaderTop>
    <!-- 食品 -->
    <div class="swiper-container" v-if="foodTypes.length">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(foodTypes, index) in foodTypesArr"
          :key="index"
        >
          <a
            v-for="(foodType, index) in foodTypes"
            :key="index"
            class="link_to_food"
            @click='$router.push("/shop")'
          >
            <div class="food_container">
              <img :src="baseImgUrl + foodType.image_url" />
            </div>
            <span>{{ foodType.title }}</span>
          </a>
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
    <img src="./images/msite_back.svg" alt="back" v-else />
    <!-- 附近推荐 -->
    <div class="recommend">
      <p class="headrec">
        <i class="iconfont icon-xuanxiang">附近商家</i>
      </p>
      <ShopList></ShopList>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import HeaderTop from "@/components/HeaderTop/HeaderTop";
import ShopList from "@/components/ShopList/ShopList";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
// import { swiper, swiperSlide } from "vue-awesome-swiper";
// import "swiper/dist/css/swiper.css";
export default {
  data() {
    return {
      baseImgUrl: "https://fuss10.elemecdn.com"
    };
  },
  components: {
    HeaderTop,
    ShopList
  },
  computed: {
    ...mapState(["address", "foodTypes", "userInfo"]),
    foodTypesArr() {
      const { foodTypes } = this;
      //定义一个二维数组
      const arr = [];
      let minArr = [];
      foodTypes.forEach(food => {
        if (minArr.length === 0) {
          arr.push(minArr);
        }
        if (minArr.length === 8) {
          minArr = [];
        }
        minArr.push(food);
      });
      return arr;
    }
  },
  mounted() {
    this.$store.dispatch("getFoodTypes");
  },
  watch: {
    foodTypes(value) {
      // foodTypes数组中有数据了，在异步更新界面之前显示
      // 一旦界面更新立即调用
      this.$nextTick(() => {
        // 创建一个Swiper实例对象来实现轮播
        new Swiper(".swiper-container", {
          loop: true, //可以实现轮播
          // 如果需要分页器
          pagination: {
            el: ".swiper-pagination"
          }
        });
      });
    }
  }
};
</script>

<style lang="stylus" ref="stylesheet/stylus">
@import '../../common/stylus/mixins.styl';
.swiper-container {
      width: 100%;
      height: 100%;

      .swiper-wrapper {
        width: 100%;
        height: 100%;

        .swiper-slide {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-wrap: wrap;

          .link_to_food {
            width: 25%;

            .food_container {
              display: block;
              width: 100%;
              text-align: center;
              padding-bottom: 10px;
              font-size: 0;

              img {
                display: inline-block;
                width: 50px;
                height: 50px;
              }
            }

            span {
              display: block;
              width: 100%;
              text-align: center;
              font-size: 13px;
              color: #666;
            }
          }
        }
      }

      .swiper-pagination {
        >span.swiper-pagination-bullet-active {
          background: #02a774;
        }
      }
    }

.searcht
  color white
.headrec
  float left
  margin-top 10px
  border-top 1px solid rgb(192, 190, 190)
  height 15px
  width 100%
  margin-bottom 20px
  .iconfont
    color rgb(138, 138, 138)
    font-size 14px
    float left
    margin-top 10px
    margin-left 10px
</style>
