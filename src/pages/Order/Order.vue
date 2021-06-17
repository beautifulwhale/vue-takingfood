<template>
  <div>
    <section class="order">
      <HeaderTop title="订单列表" />
      <section class="order_no_login">
        <img src="./images/person.png" alt="" />
        <h3>登陆后查看外卖订单</h3>
        <router-link to="/login">
          <button>立即登录</button>
        </router-link>
      </section>
    </section>
  </div>
</template>

<script>
import HeaderTop from "@/components/HeaderTop/HeaderTop";
export default {
  components: {
    HeaderTop
  }
};
</script>

<style lang="stylus" ref="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
.order_no_login
  float left
  margin-left 60px
  margin-top 40px
  h3
    color rgb(172, 169, 169)
    font-size 13px
    float left
    margin 5px 70px
  button
    float left
    margin 5px 90px
    background-color #02a774
    color white
    border #02a774
    height 35px
    width 80px
    border-radius 5px
</style>
