<template>
  <div class="category">
    <header class="g-header-container"><CategoryHeader @query="showGetResult"></CategoryHeader></header>
    <SearchResult v-show="query" :query="query" class="category-searchResult"></SearchResult>
    <div class="g-content-container">
      <div class="sidebar-container"><CategorySidebar @switchTabEvent="getCurrentId"></CategorySidebar></div>
      <div class="content-container"><CategoryContent :curId="curId"></CategoryContent></div>
    </div>
  </div>
</template>

<script>
  import CategoryHeader from './header';
  import CategorySidebar from './sidebar';
  import CategoryContent from './content';
  import SearchResult from 'pages/search/result';
  export default {
    name: 'Category',
    components: {
      CategoryHeader,
      CategorySidebar,
      CategoryContent,
      SearchResult
    },
    data() {
      return {
        curId: '',
        query: ''
      };
    },
    methods: {
      getCurrentId(id) {
        this.curId = id;
      },
      showGetResult(query) {
        this.query = query;
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import '~assets/scss/mixins';
  .category{
    width: 100%;
    height: 100%;
    background-color: $bgc-theme;
    overflow: hidden;
  }
  .g-content-container{
    display: flex; // 若滚动条失效，一般是其要滚动的元素的内容高度 没有 大于父容器的高度，检查父容器高度及其自己的高度
  }
  .sidebar-container{
    width: 80px;
    height: 100%;
  }
  .content-container{
    flex: 1;
    height: 100%;
  }
  .category-searchResult{ // 搜索框输入内容搜索结果展示区
    position: absolute;
    top: $navbar-height;
    width: 100%;
    background: #fff;
    z-index: $search-z-index;
  }
</style>
