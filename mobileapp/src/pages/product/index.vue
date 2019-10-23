<template>
<transition name="product">
  <div class="product" v-if="isShow">
    <header class="g-header-container"><ProductHeader :class="{'header-transition': isHeaderTransition}" ref="productHeader"></ProductHeader></header>
    <!-- <BScroll :scrollbar="scrollbar" :data="postlistArr" @scroll="scroll" @scrollEnd="scrollEnd" @pullDownTransitionEnd="pullDownTransitionEnd" ref="scroll"> -->
    <BScroll :scrollbar="scrollbar" ref="scroll">
      <!-- 由于数据是动态生成的，所以需要刷新滚动条，重新获取内容高度，滚动条才能生效  -->
      <!-- 方法①：传递参数---子向父元素传数据，冒个泡告诉scroll你数据加载完成了，触发滚动条刷新；这里的loaded在postlist.vue中定义 -->
    <!-- <div class="product-container"> -->
      <div class="product-wrapper">
        <ProductSwiper :slidersArr="slidersArr"></ProductSwiper>
        <ProductContent :contents="contents"></ProductContent>
      </div>
    <!-- </div> -->
    </BScroll>
    <div class="g-backtop-container"><BBacktop :visible="isBacktopVisible" @backtop="backToTop"></BBacktop></div>
    <footer class="g-footer-container"><ProductFooter></ProductFooter></footer>
    <router-view></router-view>
  </div>
</transition>
</template>

<script>
  import {getProductDetails} from 'api/product';
  import BScroll from 'basecomponents/scroll';
  import {scrollOptions, HEADER_TRANSITION_HEIGHT, PRODUCT_CONTENT_KEYWORD_KEY} from './config';
  import ProductHeader from './header';
  import ProductSwiper from './swiper';
  import ProductContent from './content';
  import BBacktop from 'basecomponents/backtop';
  import ProductFooter from './footer';
  import storage from 'assets/js/storage';
  export default {
    name: 'Product',
    components: {
      BScroll,
      BBacktop,
      ProductHeader,
      ProductSwiper,
      ProductContent,
      ProductFooter
    },
    data() {
      return {
        isBacktopVisible: false,
        isHeaderTransition: false,
        productId: '',
        slidersArr: [],
        contents: {},
        keyId: Math.random(),
        isShow: false
      };
    },
    created() {
      this.init();
    },
    mounted() {
      this.isShow = true;
    },
    watch: {
      productId(productId) {
        this.productId = this.$route.params.id; // $router特有的方法
        storage.remove(PRODUCT_CONTENT_KEYWORD_KEY);
        console.log(this.$route.params.id);
        this.keyId = Math.random();
        this.getProductData(this.productId);
      }
    },
    methods: {
      init() {
        this.scrollbar = scrollOptions.scrollbar;
        this.productId = this.$route.params.id; // $router特有的方法
        this.getProductData(this.productId);
      },
      getProductData(id) {
        return getProductDetails(id).then(data => {
          console.log(data);
          if (!data || !data.slider) {
            this.slidersArr = [require('assets/images/404.png')];
            console.log(this.slidersArr);
            return;
          }
          this.slidersArr = data.slider;
          this.contents = data;
          storage.set(PRODUCT_CONTENT_KEYWORD_KEY, data);
          console.log(this.contents);
          });
      },
      // scroll(translate) {
        // this.changeHeaderStatus(translate); // 在滚动的时候触发头部导航状态及背景色的改变
      // },
      backToTop() {
        this.$refs.scroll && this.$refs.scroll.scrollToTop(); // 调用scroll中自定义的scrollToTop方法，实现回滚到顶部
      },
      changeHeaderStatus(translate) {
        if (translate > 0) { // 如果上拉就隐藏头部导航
          this.$refs.productHeader.hide();
          return;
        }
        this.$refs.productHeader.show();
        this.isHeaderTransition = -translate > HEADER_TRANSITION_HEIGHT; // 下拉时translate是负数，当下拉超过该距离时就添加渐变类
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import '~assets/scss/mixins';
  .product{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $bgc-theme;
    z-index: $product-z-index;
    overflow: hidden;
  }
  .product-container{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .product-wrapper{
    width: 100%;
    overflow: scroll;
  }
  .product-enter-active,
  .product-leave-active{
    transition: all 0.3s;
  }
  .product-enter,
  .product-leave-to{
    transform: translate3d(100%,0,0);
  }
</style>
