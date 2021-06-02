<template>
    <div>
      <header class="header">
      <a href="" class="header_title">
        <slot name="left"></slot>
        <span class="header_title_text" style="margin-left: 15px;">{{title}}</span>
        <slot name="right"></slot>
      </a>
    </header>  
    </div>
</template>


<script>
export default {
    props:{
        title:String
    }
}
</script>

<style lang="stylus" ref="stylesheet/stylus">
.header
  width 100%
  height 40px
  float left
  background-color #02a774
  // text-align center
  .header_title
    text-decoration none
    color white
    font-size 18px
    .searcht
      float left
      margin 10px 10px
    .header_title_text
      float left
      margin-top 13px
      margin-left 45%
    .header_title_text1
      float left
      font-size 10px
      margin-top 18px
      margin-left 12px
</style>





