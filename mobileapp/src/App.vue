<template>
<!-- 该App.vue文件是一个全局组件，下面放置的是全局的容器，主要用于定位(定位容器)，因为我吗构建子组件一般不会涉及位置信息，位置信息一般在全局或页面去定位 -->
  <div id="app" class="g-container">
    <div class="g-view-container">
      <!-- keep-alive是Vue提供的一个抽象组件，用来对组件进行缓存，被包裹在keep-alive中的组件的状态将会被保留，
           当组件在keep-alive内被切换时组件的activated、deactivated这两个生命周期钩子函数会被执行，
           若没有这个keep-alive则点击搜索框跳转到搜索页时的active动画会失效 -->
      <keep-alive>
        <router-view></router-view> <!-- 路由匹配到的组件将渲染在这里 -->
      </keep-alive>
    </div>
    <div class="g-footer-container">
      <CTabbar></CTabbar>
    </div>
  </div>
</template>

<script>
  import CTabbar from 'components/tabbar/';
  export default {
    name: 'App',
    components: {
      CTabbar
    }
  };
</script>

<style lang="scss">
/* 要应用sass编辑css,还需要在cmd中安装sass,输入：cnpm install --save-dev node-sass sass-loader */
</style>
