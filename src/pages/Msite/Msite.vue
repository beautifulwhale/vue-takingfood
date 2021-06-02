<template>
  <div class="msite">
    <!-- 头部 -->
    <HeaderTop :title='address.name'>
        <span class="searcht" slot='left'><i class="iconfont icon-search"></i></span>
        <span class="header_title_text1" slot='right'>登录/注册</span>
    </HeaderTop>
    <!-- 食品 -->
    <div class="swiper-container">
      <ul class='swiper-wrapper'>
        <li class="swiper-slide">
          <img src="./images/home/1.jpg" alt="" />
          <span class="foodintroduce">甜品优惠</span>
        </li>
        <li class="swiper-slide">
          <img src="./images/home/2.jpg" alt="" />
          <span class="foodintroduce">商城福利</span>
        </li>
        <li class="swiper-slide">
          <img src="./images/home/3.jpg" alt="" />
          <span class="foodintroduce">面食</span>
        </li>
        <li class="swiper-slide">
          <img src="./images/home/4.jpg" alt="" />
          <span class="foodintroduce">新店优惠</span>
        </li>
        <li class="swiper-slide">
          <img src="./images/home/5.jpg" alt="" />
          <span class="foodintroduce">准时达</span>
        </li>
        <li class="swiper-slide">
          <img src="./images/home/6.jpg" alt="" />
          <span class="foodintroduce">土豪推荐</span>
        </li>
        <li class="swiper-slide">
          <img src="./images/home/7.jpg" alt="" />
          <span class="foodintroduce">海鲜食品</span>
        </li>
        <li class="swiper-slide">
          <img src="./images/home/8.jpg" alt="" />
          <span class="foodintroduce">粥类饮品</span>
        </li>
        <li class="swiper-slide">
          <img src="./images/home/9.jpg" alt="" />
          <span class="foodintroduce">快餐汉堡</span>
        </li>
      </ul>
      <!-- Add Pagination -->
      <div class='swiper-pagination'></div>
          <!-- 附近推荐 -->
      <div class="recommend">
        <p class="headrec">
          <i class="iconfont icon-xuanxiang">附近商家</i>
        </p>
        <ShopList></ShopList>
       
      </div>
    </div>
  
  </div>
</template>

<script>
import {mapState} from 'vuex'
import HeaderTop from '@/components/HeaderTop/HeaderTop'
import ShopList from '@/components/ShopList/ShopList'
// import 'swiper/swiper-bundle.css'
// import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
 


export default {
  components:{
    HeaderTop,
    ShopList  
  },
  computed:{
    ...mapState(['address'])
  }
  // mounted(){
  //   //创建一个Swiper实例对象来实现轮播
  //   var swiper=new Swiper('.swiper-container',{
  //     loop:true,  //可以实现轮播
  //     // 如果需要分页器
  //     pagination:{
  //       el:'.swiper-pagination'
  //     }
  //   })
  // }
};
</script>

<style lang="stylus" ref="stylesheet/stylus">
.swiper-container
  width 100%
  height 1000px
  .swiper-slide
    float left
    width 30%
    height 100px
    margin-top 10px
    margin-left 13px
    .foodintroduce
      float left
      font-size 15px
      margin-left 20px
.headrec
  float left
  margin-top 20px
  // margin-left 10px
  border-top 1px solid rgb(192, 190, 190)
  height 15px
  width 100%
  .iconfont
    color rgb(192, 190, 190)
    font-size 14px
    float left
    margin-top 10px
    margin-left 10px


</style>
