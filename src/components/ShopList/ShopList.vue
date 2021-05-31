<template>
     <ul class="allstores">
          <li class="stores">
            <div class="storesintroduce" style="margin-top:20px">
            <img src="./images/shop/1.jpg" alt="" />
              <span class="brand">品牌</span>
              <span class="storename">锄禾日当午，汗滴禾...</span>
              <span class="baozhun">保 准 票</span>
              <span class="star">❤❤❤❤❤3.6</span>
              <span class="sale">月售106单</span>
              <span class="takingfood">硅谷外卖</span>
              <span class="send">￥20起送/配送费约￥5</span>
            </div>
          </li>
          <li class="stores">
            <div class="storesintroduce">
            <img src="./images/shop/2.jpg" alt="" />
              <span class="brand">品牌</span>
              <span class="storename">锄禾日当午，汗滴禾...</span>
              <span class="baozhun">保准票</span>
              <span class="star">❤❤❤❤3.5</span>
              <span class="sale">月售106单</span>
              <span class="takingfood">硅谷外卖</span>
              <span class="send">￥20起送/配送费约￥5</span>
            </div>
          </li>
          <li class="stores">
            <div class="storesintroduce">
            <img src="./images/shop/3.jpg" alt="" />
              <span class="brand">品牌</span>
              <span class="storename">锄禾日当午，汗滴禾...</span>
              <span class="baozhun">保准票</span>
              <span class="star">❤❤❤❤❤❤4.2</span>
              <span class="sale">月售106单</span>
              <span class="takingfood">硅谷外卖</span>
              <span class="send">￥20起送/配送费约￥5</span>
            </div>
          </li>
        </ul>
</template>

<script>
    export default {
        
    }
</script>

<style lang="stylus" scoped>
.allstores
  width 100%
  height 300px
  // float left
  .stores
    width 100%
    height 100px
    .storesintroduce
      float left
      margin-left 5px
      img 
        float left
        margin 10px 10px
      .brand
        background-color rgb(238, 227, 69)
        font-size 13px
        float left
        margin-top 10px
      .storename
        float left
        margin-top 8px
        margin-left 3px
        font-size 15px
      .baozhun
        font-size 13px
        float left
        margin-top 12px
        margin-left 25px
        border 1px solid  rgb(231, 231, 231)
        color rgb(190, 186, 186)
      .star
        font-size 10px
        float left
        margin-top 20px
        color rgb(235, 218, 72)
      .sale
        font-size 10px
        float left
        margin-top 20px
        margin-left 10px
        color rgb(206, 205, 198)
      .takingfood
        font-size 7px
        float left
        color #02a774
        border 1px solid #02a774
        margin-top 20px
        margin-left 55px
      .send
        float left
        margin-top 20px
        color rgb(95, 95, 92)
        font-size 13px
</style>

