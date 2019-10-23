<template>
  <div class="person">
    <header class="g-header-container"><PersonHeader></PersonHeader></header>
    <div class="person-content">
      <div class="person-top">
        <div class="person-topImg"><i class="iconfont icon-personal"></i></div>
        <p class="person-topROL"><span class="register">注册</span>|<span class="login">登录</span></p>
      </div>
      <div class="person-section">
        <p class="person-title"><i class="person-titleL iconfont icon-service"></i><span class="person-titleC">我的订单</span><span class="person-titleR">查看我的全部订单</span><i class="iconfont icon-back"></i></p>
        <ul class="person-list">
          <li class="person-item"><i class="iconfont icon-personal"></i><p>待付款</p></li>
          <li class="person-item"><i class="iconfont icon-personal"></i><p>待收货</p></li>
          <li class="person-item"><i class="iconfont icon-personal"></i><p>待评价</p></li>
          <li class="person-item"><i class="iconfont icon-personal"></i><p>退货/退款</p></li>
        </ul>
      </div>
      <div class="person-section">
        <p class="person-title"><i class="person-titleL iconfont icon-service"></i><span class="person-titleC">我的资产</span></p>
        <ul class="person-list">
          <li class="person-item"><p>现金券</p></li>
          <li class="person-item"><p>红包</p></li>
          <li class="person-item"><p>余额</p></li>
          <li class="person-item"><p>礼品卡</p></li>
        </ul>
      </div>
      <div class="person-section person-section3">
        <p class="person-title"><i class="person-titleL iconfont icon-service"></i><span class="person-titleC">售后服务</span><i class="person-titleR iconfont icon-back"></i></p>
        <p class="person-title"><i class="person-titleL iconfont icon-service"></i><span class="person-titleC">意见反馈</span><i class="person-titleR iconfont icon-back"></i></p>
        <p class="person-title"><i class="person-titleL iconfont icon-service"></i><span class="person-titleC">收货地址</span><i class="person-titleR iconfont icon-back"></i></p>
        <p class="person-title"><i class="person-titleL iconfont icon-service"></i><span class="person-titleC">退出登录</span><i class="person-titleR iconfont icon-back"></i></p>
        <p class="person-title"><i class="person-titleL iconfont icon-service"></i><span class="person-titleC">400-123-8888</span><i class="person-titleR iconfont icon-back"></i></p>
      </div>
      <div class="person-section person-section4">
        <p>客服热线40-13-8888<time>(8:00-22:00)</time></p>
        <p>拨打前请记录您的UID 0</p>
      </div>
    </div>
  </div>
</template>

<script>
  import PersonHeader from './header';
  export default {
    name: 'Person',
    components: {
      PersonHeader
    }
  };
</script>

<style lang="scss" scoped>
  @import '~assets/scss/mixins';
  .icon-back{
    transform: rotate(-180deg);
    color: #aaa;
  }
  .person{
    width: 100%;
    height: 100%;
    overflow: scroll;
    // overflow: hidden;
  }
  .person-content{
    overflow: scroll;
  }
  .person-top{
    position: relative;
    height: 183px;
    width: 100%;
    background: $header-bgc;
  }
  .person-topImg{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 64px;
    height: 64px;
    margin: auto;
    border-radius: 50%;
    background: #fff;
    @include flex-center();
    .iconfont{
      font-size: 78px;
      color: $header-bgc;
    }
  }
  .person-topROL{
    position: absolute;
    bottom: 22px;
    width: 100%;
    text-align: center;
    color: #fff;
    font-size: 20px;
  }
  .register, .login{
    margin: 0 20px;
    cursor: pointer;
  }
  .person-section{
    width: 100%;
    margin: 10px 0;
    background: #fff;
  }
  .person-title{
    display: flex;
    align-items: center;
    padding: 10px;
    font-size: 16px;
    font-weight: bold;
    border-bottom: 1px solid #eee;
    .person-titleL{
      width: 20px;
      margin-right: 16px;
      font-size: $icon-font-size;
      font-weight: normal;
    }
    .person-titleC{
      flex: 1;
    }
    .person-titleR{
      color: #aaa;
      .iconfont{
        margin-left: 8px;
      }
    }
  }
  .person-list{
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    .person-item{
      @include flex-center(column);
      width: 25%;
      padding: 15px 0 12px;
      font-size: 14px;
      color: #888;
      .iconfont{
        font-size: 32px;
        margin-bottom: 10px;
      }
    }
    .person-section3 .person-title{
      color: #888;
    }
    .person-section4{
      background: transparent;
      p{
        color: #aaa;
        font-size: 14px;
        line-height: 1.5;
      }
    }
</style>
