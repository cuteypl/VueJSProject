<template>
  <div class="g-tabbar">
    <router-link class="g-tabbar-item" to="/home">
      <i class="iconfont icon-home"></i>
      <p>首页</p>
    </router-link>
    <router-link class="g-tabbar-item" to="/category">
      <i class="iconfont icon-category"></i>
      <p>分类页</p>
    </router-link>
    <router-link class="g-tabbar-item" to="/cart">
      <i class="iconfont icon-cart"></i>
      <p>购物车</p>
    </router-link>
    <router-link class="g-tabbar-item" to="/person">
      <i class="iconfont icon-personal"></i>
      <p>个人中心</p>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'CTabbar'
  };
</script>

<style lang='scss' scoped>
  @import '~assets/scss/mixins.scss'; //前面加 ~ 表示你后面的值为 alias, 然后就会去 webpack alias 配置中找相应的值, 然后拼接成最后的地址
  .router-link-active{
      color: $link-active-color;
  }
</style>
