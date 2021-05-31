<template>
  <div>
    <section class="search">
      
      <HeaderTop title='搜索'></HeaderTop>
      <form action="#" class="search_form">
        <input
          type="search"
          name="search"
          placeholder="请输入商家或美食名称"
          class="search_input"
        />
        <input type="submit" name="submit" class="search_submit" />
      </form>
    </section>
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
.search_input
  width 85%
  height 25px
  float left
  margin-left 5px
  margin-top 8px
  background-color rgb(231, 231, 231)
  border rgb(231, 231, 231)
  border-radius 3px
.search_submit
  float left
  background-color #02a774
  color white
  border #02a774
  margin-top 8px
  margin-left 5px
  height 25px
  border-radius 3px

</style>
