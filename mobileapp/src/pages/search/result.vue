<template>
  <!-- <div>
    result
  </div> -->
  <div class="result">
    <div class="loading-container" v-show="loading">
      <BLoading></BLoading>
    </div>
    <ul class="g-list" v-show="!loading && results.length">
      <li class="g-list-item" v-for="(item, index) in results" :key="index" @click="$_search_selectItem(item[0])" >
        <span class="g-list-text">{{item[0]}}</span>
      </li>
    </ul>
    <div class="no-result" v-show="!loading && !results.length">没有结果</div>
  </div>
</template>

<script>
  import BLoading from 'basecomponents/loading';
  import {getSearchResult} from 'api/search';
  import {searchMixin} from 'assets/js/mixins';
  export default {
    name: 'SearchResult',
    components: {
      BLoading
    },
    data() {
      return {
        results: [],
        loading: true
      };
    },
    props: {
      query: {
        type: String,
        default: ''
      }
    },
    mixins: [searchMixin],
    watch: {
      query(query) {
        this.getResults(query);
      }
    },
    methods: {
      getResults(keyword) {
        if (!keyword) {
          return;
        }

        this.loading = true;
        getSearchResult(keyword).then(data => {
          if (data) {
            this.results = data;
            this.loading = false;
          }
        });
      }
    }
  };
</script>

<style lang="scss" scoped>
</style>
