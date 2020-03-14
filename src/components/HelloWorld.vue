<template>
  <div id="hello">  <!--@touchmove.prevent-->
    <div id="content">
      <img :src=imgUrl>
    </div>
    <h1 >{{seconds}}</h1>
    <mt-button class="button" type="danger" size="large" @click.native="handleClick">{{msg}}</mt-button>
    <mt-button class="button" type="primary" @click.native="handleReset">重置</mt-button>
    <div class="icon">
      <i class="iconfont icon-icon-test"  @click="handlePrev"></i>
      <div class="showNumber">{{imgIndex+1}} / {{imgArr.length}}</div>
      <i class="iconfont icon-icon-test1" @click="handleNext"></i>  <!--//阿里矢量库图标引用-->
    </div>
    <a class="weiBoUrl" href="https://m.weibo.cn/search?containerid=100103type%3D1%26q%3D%E7%BE%8E%E5%A5%B3">
      <i class="iconfont icon-icon-test2"></i>
    </a>



    <audio id="audioPlay" src="./static/music.mp3">
      &nbsp;</audio>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui';
  const TIME_VALUE = 35;
  const TEMP_IMAGE_URL = './static/';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '开始',
      seconds:TIME_VALUE,
      isWork:false,
      imgUrl:'./static/' + '0.gif',
      imgArr:['0.gif','1.gif','2.gif','3.gif','4.gif','5.gif','6.gif','7.gif',
              '8.gif','9.gif','10.gif','11.gif','12.gif','13.gif','14.gif'],
      imgIndex:0
    }
  },
  methods:{

    //开始、暂停计时
    handleClick(){
      if (this.seconds == 0){ //重置计时器
        //关闭音乐
        // document.getElementById('audioPlay').pause();
        document.getElementById('audioPlay').load();

        //重置页面状态值
        this.isWork = false;
        this.msg = '开始';
        this.seconds = TIME_VALUE;
        //关闭定时器
        clearInterval(this.intervalId);
        return
      }
      if(!this.isWork) {
        //开启定时器
        this.intervalId = setInterval(() => {
          if(this.isWork === true){
            this.seconds = this.seconds-1
          }
        },1000);
      } else{
        //关闭定时器
        clearInterval(this.intervalId);
      }
      //更改按钮显示状态：“开始”或者“暂停”
      this.isWork = !this.isWork;
      this.msg = this.isWork?'暂停':'开始';
    },
    //切换上一张图片0
    handlePrev(){
      this.imgIndex--;
      if (this.imgIndex < 0){
        this.imgIndex = this.imgArr.length - 1;
      }
      this.imgUrl = TEMP_IMAGE_URL + this.imgArr[this.imgIndex];
      console.log(this.imgUrl);
      document.getElementById('audioPlay').load();
      //重置页面状态值
      this.isWork = false;
      this.msg = '开始';
      this.seconds = TIME_VALUE;
      //关闭定时器
      clearInterval(this.intervalId);
    },
    //切换下一张图片
    handleNext() {
      this.imgIndex++;
      if (this.imgIndex > this.imgArr.length - 1){
        this.imgIndex = 0;
      }
      this.imgUrl = TEMP_IMAGE_URL + this.imgArr[this.imgIndex];
      console.log(this.imgUrl);
      document.getElementById('audioPlay').load();
      //重置页面状态值
      this.isWork = false;
      this.msg = '开始';
      this.seconds = TIME_VALUE;
      //关闭定时器
      clearInterval(this.intervalId);
    },
    //直接重置计时
    handleReset(){
      document.getElementById('audioPlay').load();
      //重置页面状态值
      this.isWork = false;
      this.msg = '开始';
      this.seconds = TIME_VALUE;
      //关闭定时器
      clearInterval(this.intervalId);
    }
  },
  watch:{//配置监视
    seconds:function (value) {
      console.log(this.seconds);
      if(value == 0){
        this.isWork = false;
        this.msg = '重置';
        //播放音乐
        let audioPlay = document.getElementById('audioPlay');
        audioPlay.play();
        audioPlay.onended = function() {
          audioPlay.play();
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #hello{
    width: 100%;
    height: 100%;
    text-align: center;
    color: #2c3e50;
  }
  #content{
    width: 100%;
    height: 60%;
    margin-bottom: 10px;
  }
  /*添加一个100%的高度的行内块，与图片进行垂直居中对齐*/
  #content:after{
    content: "";
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }
  #content > img{

    width: 100%;
    max-height: 100%;

    /*display: inline-block;*/
    vertical-align: middle;
  }
  /*给iconfont图标设置样式*/
  .iconfont{
    font-size: 40px;
  }
  .button{
    width: 50px;
    height: 30px;
    margin: 20px auto;
  }
  .icon{
    margin: 0 auto 20px ;
  }
  .showNumber{
    display: inline-block;
    margin: 2px auto 0;
    line-height: 40px;
    vertical-align: top;
    /*防止内容区的大小改变会影响布局*/
    min-width: 60px;
    text-align: right;
    padding-right: 11px;
  }
  .weiBoUrl{
    text-decoration: none;
  }
</style>


