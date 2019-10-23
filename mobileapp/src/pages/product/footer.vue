<template>
  <ul class="product-footer">
      <li class="product-footer-item"><i class="iconfont icon-service"></i><span>店铺</span></li>
      <li class="product-footer-item"><i class="iconfont icon-service"></i><span>客服</span></li>
      <li class="product-footer-item"><i class="iconfont icon-service"></i><span>收藏</span></li>
      <li class="product-footer-item cart-btn"><span>加入购物车</span></li>
      <li class="product-footer-item grab-btn"><span>马上抢</span></li>
  </ul>
</template>

<script>
    export default {
        name: 'ProductFooter'
    };
</script>

<style>
    .product-footer{
        display: flex;
        height: 50px;
        justify-content: center;
        align-items: center;
        background: #fff;
    }
    .product-footer-item{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1;
    }
    .cart-btn{
        height: 100%;
        background: orange;
        flex: 2;
        color: #fff;
    }
    .grab-btn{
        height: 100%;
        background: rgb(201, 50, 100);
        flex: 2;
        color: #fff;
    }
</style>
