<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
body{
  width: 100%;
  background: #fff;
  font-size: .32rem;
  color: #2b333b;
}
div,ul,nav{
  box-sizing: border-box;
}
a{
  text-decoration: none;
}
a{
    text-decoration: none;
    color: #333;
    -webkit-tap-highlight-color:rgba(0, 0, 0, 0);  /* 取消a标签在移动端点击时的背景颜色 */
    -moz-tap-highlight-color:rgba(0, 0, 0, 0);
    -ms-tap-highlight-color:rgba(0, 0, 0, 0);
    -o-tap-highlight-color:rgba(0, 0, 0, 0);
}
</style>
