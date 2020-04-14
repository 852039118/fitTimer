<template>
  <div id="app">
    <HeaderGuide></HeaderGuide>
    <router-view/>
  </div>
</template>

<script>
  import HeaderGuide from "./components/HeaderGuide/HeaderGuide";
export default {
  name: 'App',
  components:{
    HeaderGuide
  }
}
</script>

<style>
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 10px;*/
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  bottom: 0px;
}
a{
  text-decoration: none;
  color: white;
}
</style>
