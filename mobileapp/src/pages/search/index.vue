<template>
  <transition name="search">
    <div class="search">
      <header class="g-header-container">
        <SearchHeader @query="getQuery"></SearchHeader>
      </header>
      <div class="g-content-container">
        <BScroll ref="scroll">
          <SearchHot v-show="!query" @loaded="updateScroll"></SearchHot>
          <SearchHistory v-show="!query" @show-confirm="showConfirm" @remove-item="updateScroll" ref="history"></SearchHistory>
          <SearchResult v-show="query" :query="query"></SearchResult>
        </BScroll>
      </div>
      <BConfirm msg="确定要清空吗？" @confirm="clearAllSearchHistorys" ref="confirm"></BConfirm>
    </div>
  </transition>
</template>

<script>
  import BScroll from 'basecomponents/scroll';
  import BConfirm from 'basecomponents/confirm';
  import SearchHeader from './header';
  import SearchHot from './hot';
  import SearchHistory from './history';
  import SearchResult from './result';
  export default {
    name: 'Search',
    components: {
      BScroll,
      BConfirm,
      SearchHeader,
      SearchHot,
      SearchHistory,
      SearchResult
    },
    data() {
      return {
        query: ''
      };
    },
    methods: {
      getQuery(query) { this.query = query; },
      updateScroll() { this.$refs.scroll.update(); },
      showConfirm() { this.$refs.confirm.show(); },
      clearAllSearchHistorys() {
        this.$refs.history.clear();
        this.$refs.history.update();
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";
  .search{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: $search-z-index;
    background-color: $bgc-theme;
  }
  .search-enter{
    transform: translate3d(100%,0,0);
  }
  .search-enter-active, .search-leave-active{
    transition: all 0.3s;
  }
  .search-leave-to{
    transform: translate3d(100%,0,0);
  }
</style>
