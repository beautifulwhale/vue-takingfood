<template>
  <div class="login">
    <p class="jiantou">
      <i class="iconfont icon-jiantou2" @click="$router.back()"></i>
    </p>
    <div class="logincontent">
      <span class="title">硅谷外卖</span>
      <p class="loginstyle">
        <span class="message">短信登录</span>
        <span class="password">密码登录</span>
      </p>
      <input type="text" placeholder="手机号" class="phonenum"/>
      <input type="text" placeholder="验证码" class="number" />
      <p class="ps">
        温馨提示：未注册的硅谷外卖账号的手机号,登录时将自动注册,且代表同意
        <span class="xieyi">《用户服务协议》</span>
      </p>
      <button class="btn">登录</button>
      <span class="aboutus">关于我们</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.login
    width 100%
    .jiantou
        float left
        margin 0px 0px
    .logincontent
        width 100%
        .title
            color #02a774
            font-size 37px
            font-weight bold
            float left
            margin-top 50px
            margin-left 100px
        .loginstyle
            float left
            width 100%
            margin-top 35px
            margin-left 120px
            .message
                color #02a774
                border-bottom  4px solid #02a774
                float left
                padding-bottom 3px
                margin-right 20px 
            .password
                color #02a774
                border-bottom  4px solid #02a774
                float left
                padding-bottom 3px
        .phonenum
            float left
            width 300px
            height 35px
            margin-top 8px
            margin-left 50px
            border-radius 5px
            border-color rgb(196, 197, 196) 
        .number
            float left
            width 300px
            height 35px
            margin-top 8px
            margin-left 50px
            border-radius 5px
            border-color rgb(196, 197, 196) 
            // border-top-color  rgb(196, 197, 196)
        .ps
            float left
            font-size 10px
            color rgb(196, 197, 196) 
            margin 10px 50px
            .xieyi
                color #02a774
        .btn
            float left
            width 300px
            height 35px
            margin-left 50px
            margin-top 20px
            color white
            background rgb(47, 233, 47)
            border rgb(47, 233, 47)
            border-radius 5px
        .aboutus
            color rgb(136, 136, 136)
            font-size 13px
            float left
            margin-left 170px
            margin-top 20px
</style>
