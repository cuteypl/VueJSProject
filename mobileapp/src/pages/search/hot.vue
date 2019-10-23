<template>
  <div class="hot">
      <h4 class="hot-title">热门搜索</h4>
      <div class="loading-container" v-if="!hots.length"><BLoading></BLoading></div>
      <ul class="hot-list" v-else>
          <li class="hot-item" v-for="(item,index) in hots" :key="index" @click="$_search_selectItem(item.hotWord)">{{item.hotWord}}</li>
      </ul>
  </div>
</template>

<script>
    import BLoading from 'basecomponents/loading';
    import {getSearchHotKeyword} from 'api/search';
    import {searchMixin} from 'assets/js/mixins';
    export default {
        name: 'SearchHot',
        components: {
            BLoading
        },
        data() {
            return { hots: [] };
        },
        created() {
            this.getHotKeyword().then(() => { this.$emit('loaded'); }); // 抛出loaded，告知已经加载好了数据，去刷新滚动条
        },
        mixins: [searchMixin],
        methods: {
            getHotKeyword() {
                return getSearchHotKeyword().then(data => {
                return new Promise(resolve => {
                    if (data) {
                    this.hots = data;
                    resolve();
                    }
                });
                });
            }
        }
    };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";
  .hot {
        padding-left: 10px;
        margin-bottom: 10px;
        border-bottom: 1px solid $border-color;
        background-color: #fff;
        &-title {
            height: 34px;
            line-height: 34px;
            font-size: $font-size-l;
            font-weight: bold;
        }
        &-list {
            display: flex;
            flex-wrap: wrap;
        }
        &-item {
            padding: 8px;
            margin: 0 10px 10px 0;
            background-color: #f0f2f5;
            border-radius: 4px;
            color: #686868;
        }
    }
  .loading-container {
    padding: 10px 0;
  }
</style>
