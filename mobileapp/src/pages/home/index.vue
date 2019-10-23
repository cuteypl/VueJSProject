<template>
  <div class="home">
    <header class="g-header-container"><HomeHeader :class="{'header-transition': isHeaderTransition}" ref="header"></HomeHeader></header>
    <BScroll :scrollbar="scrollbar" :data="postlistArr" pullDown @pullDownEnd="pullToRefreshSlider" pullUp @pullUpEnd="pullToLoadMorePostlist" @scroll="scroll" @scrollEnd="scrollEnd" @pullDownTransitionEnd="pullDownTransitionEnd" ref="scroll">
      <HomeSwiper ref="myswiper"></HomeSwiper>
      <HomeNavtap></HomeNavtap>
      <!-- 由于数据是动态生成的，所以需要刷新滚动条，重新获取内容高度，滚动条才能生效  -->
      <!-- 方法①：传递参数---子向父元素传数据，冒个泡告诉scroll你数据加载完成了，触发滚动条刷新；这里的loaded在postlist.vue中定义 -->
      <HomePostlist @loaded="getPostlistArr" ref="postlist"></HomePostlist>
    </BScroll>
    <div class="g-backtop-container"><BBacktop :visible="isBacktopVisible" @backtop="backToTop"></BBacktop></div>
    <router-view></router-view>
  </div>
</template>

<script>
  import BScroll from 'basecomponents/scroll';
  import {scrollOptions, HEADER_TRANSITION_HEIGHT} from './config';
  import HomeHeader from './header';
  import HomeSwiper from './swiper';
  import HomeNavtap from './navtap';
  import HomePostlist from './postlist';
  import BBacktop from 'basecomponents/backtop';
  export default {
    name: 'Home',
    components: {
      BScroll,
      HomeHeader,
      HomeSwiper,
      HomeNavtap,
      HomePostlist,
      BBacktop
    },
    data() {
      return {
        postlistArr: [],
        isBacktopVisible: false,
        isHeaderTransition: false
      };
    },
    created() {
      this.scrollbar = scrollOptions.scrollbar;
    },
    methods: {
      getPostlistArr(postlistArr) {
        this.postlistArr = postlistArr;
      },
      pullToRefreshSlider(pullDownEnd) {
        this.$refs.myswiper.update().then(pullDownEnd); // 执行swiper.vue中的update更新slider后,再执行scroll/index.vue中的pullDownEnd,恢复一些参数设置
      },
      pullToLoadMorePostlist(pullUpEnd) {
        this.$refs.postlist.update().then(pullUpEnd).catch(err => {
          if (err) { console.log(err); }
          pullUpEnd();
        });
      },
      pullDownTransitionEnd() {
        this.$refs.header.show();
      },
      scroll(translate) {
        this.changeHeaderStatus(translate); // 在滚动的时候触发头部导航状态及背景色的改变
      },
      scrollEnd(translate, scroll, pulling) {
        if (!pulling) { this.changeHeaderStatus(translate); }
        this.isBacktopVisible = translate < 0 && -translate > scroll.height; // 当向下拉超过一屏时显示backtop
      },
      backToTop() {
        this.$refs.scroll && this.$refs.scroll.scrollToTop(); // 调用scroll中自定义的scrollToTop方法，实现回滚到顶部
      },
      changeHeaderStatus(translate) {
        if (translate > 0) { // 如果上拉就隐藏头部导航
          this.$refs.header.hide();
          return;
        }
        this.$refs.header.show();
        this.isHeaderTransition = -translate > HEADER_TRANSITION_HEIGHT; // 上拉时translate是负数，当上拉超过该距离时就添加渐变类
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import '~assets/scss/mixins';
  .home{
    width: 100%;
    height: 100%;
    background: $bgc-theme;
    overflow: hidden;
  }
</style>
