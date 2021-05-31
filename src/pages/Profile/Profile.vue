<template>
  <div class="profile">
    <HeaderTop title='我的'></HeaderTop>
    <div class="login">
      <!-- 登录注册 -->
      <router-link to="/login" class="login_register">
         <div class="photo">
          <i class="iconfont icon-wode-copy"></i>
        </div>
        <div class="text_phone">
          <span class="text_login">
            <span>登录/注册</span>
            <i class="iconfont icon-jiantou"></i
          ></span>

          <span class="phonenum"
            ><i class="iconfont icon-shouji">暂无绑定手机号</i></span
          >
        </div>
      </router-link>
      <!-- <div class="login_register">
        <div class="photo">
          <i class="iconfont icon-wode-copy"></i>
        </div>
        <div class="text_phone">
          <span class="text_login">
            <span>登录/注册</span>
            <i class="iconfont icon-jiantou"></i
          ></span>

          <span class="phonenum"
            ><i class="iconfont icon-shouji">暂无绑定手机号</i></span
          >
        </div>
      </div> -->
      <!-- 账户余额 -->
      <div class="count">
        <ul>
          <li class="datacount">
            <span>
              <span class="money">0.00</span>
              <span class="yuan">元</span>
              <span class="jieshao">我的余额</span>
            </span>
          </li>
          <li class="datacount">
            <span>
              <span class="quan">0</span>
              <span class="ge">个</span>
              <span class="jieshao">我的优惠</span>
            </span>
          </li>
          <li class="datacount">
            <span>
              <span class="score">0</span>
              <span class="fen">分</span>
              <span class="jieshao">我的积分</span>
            </span>
          </li>
        </ul>
      </div>
    </div>
    <!-- 订单等 -->
    <div class="orderstore">
      <ul>
        <li class="list">
          <i class="iconfont icon-icon-" id="dingdan"></i>
          <span class="jieshi">我的订单</span>
          <i class="iconfont icon-jiantou" id="jiantou"></i>
        </li>
        <li class="list">
          <i class="iconfont icon-jifen1" id="jifen"></i>
          <span class="jieshi">积分商城</span>
          <i class="iconfont icon-jiantou" id="jiantou"></i>
        </li>
        <li class="list">
          <i class="iconfont icon-huiyuan_" id="huiyuan"></i>
          <span class="jieshi">外卖会员卡</span>
          <i class="iconfont icon-jiantou" id="jiantou"></i>
        </li>
        <li class="list">
          <i class="iconfont icon-fuwuzhongxin" id="fuwu"></i>
          <span class="jieshi">服务中心</span>
          <i class="iconfont icon-jiantou" id="jiantou"></i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import HeaderTop from '@/components/HeaderTop/HeaderTop'
export default {
  components:{
    HeaderTop
  }
};
</script>

<style lang="stylus" ref="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"

.login
  float left
  margin-top 1px
  width 100%
  height 200px
  border 2px #02a774 soild
  .login_register
    height 100px
    float left
    background-color #02a774
    .photo
      float left
      margin 30px 10px
      width 50px
      height 50px
      border-radius 50%
      background  grey
      .iconfont
        width 30px
        height 100px
        float left
        margin 18px 17px
        color white
    .text_phone
      // float left
      .text_login
        color white
        float left
        margin-top 32px
      .iconfont
        color white 
        margin-left  210px  
      .phonenum
        color white
        float left
        margin-top 10px
        margin-left -210px
.count
  height 200px
  width 100%
  border-bottom 1px solid rgba(221, 219, 219, 0.938)
  .datacount
    float left
    width 33%
    margin-top 10px
    border-right  1px solid rgba(221, 219, 219, 0.938)
    .money
      float left
      color rgb(226, 188, 21)
      font-size 30px
      font-weight bold
      margin-top 15px
      margin-left 20px
    .yuan
      float left
      margin-top 23px
      margin-left 2px
    .jieshao
      float left
      margin 10px 25px
    .quan
      float left
      color red
      font-size 30px
      font-weight bold
      margin-top 15px
      margin-left 30px
    .ge
      float left
      margin-top 23px
      margin-left 2px
    .score
      float left
      color green
      font-size 30px
      font-weight bold
      margin-top 15px
      margin-left 30px
    .fen
      float left
      margin-top 23px
      margin-left 2px
.orderstore
  width 100%
  height 200px
  // background-color pink
  float left
  .list
    height 30px
    border-bottom 1px solid rgba(221, 219, 219, 0.938)
    margin-top 20px
  #jiantou
    color rgba(211, 208, 208, 0.938)
    float left
    margin-top -20px
    margin-left 95%
  #dingdan
    color rgba(49, 228, 204, 0.938)
  #jifen
    color rgba(209, 149, 69, 0.938)
  #huiyuan
    color rgba(245, 209, 9, 0.938)
  #fuwu
    color rgba(5, 148, 29, 0.959)
</style>
