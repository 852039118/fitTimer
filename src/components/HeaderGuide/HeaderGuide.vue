<template>
  <div class="header ">
    <i class="iconfont icon-icon-test3" @click="goTo('/fitness')"></i>
    <div class="guide ">
        <a class="guide_item " @click="goTo('/fitness')"><span>健身</span></a>
        <a class="guide_item " @click="goTo('/music')"><span>音乐</span></a>
        <a class="guide_item " @click="goTo('/social')"><span>社交</span></a>
        <a class="guide_item " @click="goTo('/video')"><span>视频</span></a>
    </div>
    <i class="iconfont icon-icon-test4" @click="goTo('/fitness')"></i>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"></div>
        <div class="swiper-slide"></div>
        <div class="swiper-slide"></div>
        <div class="swiper-slide"></div>
      </div>
    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper';
  import 'swiper/css/swiper.min.css'
  var myVue = {};  //用来获取全局的vue对象
  export default {
    data() {
      return {
        pageRouter:['/fitness','/music','/social','/video']
      }
    },
    computed: {},
    methods: {
      goTo(path){
        this.$router.replace(path);
      }
    },
    components: {},
    mounted() {
      new Swiper('.swiper-container',{
        loop: false, // 循环模式选项
        on: {
          slideChangeTransitionEnd: function(){
            myVue.goTo(myVue.pageRouter[this.activeIndex]);
            console.log(this.activeIndex);
          },
        },
      })
    },
    beforeCreate() {
      myVue = this  //获取全局的vue对象
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .swiper-container{
    /*width 2000px*/
    /*height 5000px*/
  }
  .header{
    position fixed
    z-index 999
    width 100%
    height 50px
    background pink
    opacity .5
  }
  .guide{
    display inline-block
    width 60%
    text-align center
    margin 0 13%
  }
  .guide_item{
    margin 0 10px
    line-height 50px
  }
  .iconfont{
    /*float left*/
    /*display block*/
    /*font-size 30px*/
    ///*line-height 30px*/
  }
  /*  .icon{
      float left
      !*line-height 50px*!
    }*/
</style>
