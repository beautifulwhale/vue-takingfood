<template>
  <div class="msite">
    <!-- 头部 -->
    <HeaderTop :title="address.name">
      <span class="searcht" slot="left"
        ><i class="iconfont icon-search"></i
      ></span>
      <span class="header_title_text1" slot="right">登录/注册</span>
    </HeaderTop>
    <!-- 食品 -->
    <div class="swiper-container" v-if="foodTypes.length">
      <div
        class="swiper-wrapper"
        v-for="(foodTypes, index) in foodTypesArr"
        :key="index"
      >
        <a
          class="swiper-slide"
          v-for="(foodType, index) in foodTypes"
          :key="index"
        >
          <img :src="baseImgUrl + foodType.image_url" class="foodTypeImg" />
          <span class="foodintroduce">{{ foodType.title }}</span>
        </a>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
    <img src='./images/msite_back.svg' alt='back' v-else>
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
    ...mapState(["address", "foodTypes"]),
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
  watch:{
    
    foodTypes(value){
      //foodTypes数组中有数据了，在异步更新界面之前显示
      //这个方法并不能实时性的的出现轮播  可能并不是100毫秒
      // setTimeout(() => {
      //   // 创建一个Swiper实例对象来实现轮播
      //   new Swiper('.swiper-container',{
      //     loop:true,  //可以实现轮播
      //     // 如果需要分页器
      //     pagination:{
      //       el:'.swiper-pagination'
      //     }
      //   })       
      // }, 100);
      //一旦界面更新立即调用
      // this.$nextTick(() =>{
      //    // 创建一个Swiper实例对象来实现轮播
      //   new Swiper('.swiper-container',{
      //     loop:true,  //可以实现轮播
      //     // 如果需要分页器
      //     pagination:{
      //       el:'.swiper-pagination'
      //     }
      //   })
      // })
    }

  }
};
</script>

<style lang="stylus" ref="stylesheet/stylus">
.swiper-container
  width 390px
  height 100px
  .swiper-slide
    float left
    width 60px
    margin-top 15px
    margin-left 30px
    .foodTypeImg
      width 50px
      height 50px
    .foodintroduce
      float left
      color black
      font-size 10px
      margin-top 10px
      margin-left 2px
.headrec
  float left
  margin-top 10px
  // margin-left 10px
  border-top 1px solid rgb(192, 190, 190)
  height 15px
  width 100%
  margin-bottom 20px
  .iconfont
    color rgb(192, 190, 190)
    font-size 14px
    float left
    margin-top 10px
    margin-left 10px
</style>
