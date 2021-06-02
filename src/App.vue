<template>
  <div id="app">
  <router-view/>
  <FooterGuide v-show="$route.meta.showFooter" />
  </div>
</template>

<script>
  import FooterGuide from '@/components/FooterGuide/FooterGuide'
  // import {reqFoodTypes} from './api'  
  import {mapActions} from 'vuex'
export default { 
  components:{
    FooterGuide
  },
  
  //测试接口
  // async mounted(){
  //   const result = await reqFoodTypes();
  //   console.log(result)
  // },
  mounted(){
    // this.$store.dispatch('getAddress');
    this.getAddress();
  },
  methods:{
    ...mapActions(['getAddress'])
  }
}
</script>

<style lang="stylus" ref="stylesheet/stylus">
  .app
    width 100%
    height 100%
    background #f5f5f5
</style>
