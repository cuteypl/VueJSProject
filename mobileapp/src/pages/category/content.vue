<template>
    <div class="content-wrapper">
        <div class="loading-container" v-if="isLoading">
            <div class="loading-wrapper">
                <BLoading></BLoading>
            </div>
        </div>
        <BScroll ref="scroll">
            <div class="content">
                <div class="pic" v-if="content.banner">
                    <a :href="content.banner.linkUrl" class="pic-link"><img :src="content.banner.picUrl" class="pic-img"></a>
                </div>
                <div class="section" v-for="(section,index) in content.data" :key="index">
                    <h4 class="section-title">{{section.name}}</h4>
                    <ul class="section-list">
                        <li class="section-item" v-for="(item,index) in section.itemList" :key="index">
                            <p class="section-pic" v-if="item.picUrl"><img v-lazy="item.picUrl" class="section-img"></p>
                            <p class="section name">{{item.name}}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </BScroll>
    </div>
</template>

<script>
    import BLoading from 'basecomponents/loading';
    import BScroll from 'basecomponents/scroll';
    import {getCategoryContent} from 'api/category';
    import storage from 'assets/js/storage';
    import {CATEGORY_CONTENT_KEY, CATEGORY_CONTENT_UPDATE_TIME_INTERVAL} from './config';
    export default {
        name: 'CategoryContent',
        components: {
            BLoading,
            BScroll
        },
        props: {
            curId: String,
            default: ''
        },
        data() {
            return {
                content: {},
                isLoading: false
            };
        },
        watch: {
            curId(id) {
                this.isLoading = true;
                this.getContent(id).then(() => { this.isLoading = false; });
                this.$refs.scroll && this.$refs.scroll.scrollToTop(0); // 切换后选项后，内容区回到顶部，调用scroll自定义组件的scrollToTop()
            }
        },
        methods: {
            getContent(id) {
                let contents = storage.get(CATEGORY_CONTENT_KEY);
                let updateTime;
                const curTime = new Date().getTime();
                if (contents && contents[id]) { // 如果本地存储有该数据
                    updateTime = contents[id].updateTime || 0;
                    if (curTime - updateTime <= CATEGORY_CONTENT_UPDATE_TIME_INTERVAL) {
                        return this.getContentByLocalStorage(contents[id]);
                    } else {
                        return this.getContentByHTTP(id).then(() => { this.updateLocalStorage(contents, id, curTime); });
                    }
                } else {
                    return this.getContentByHTTP(id).then(() => { this.updateLocalStorage(contents, id, curTime); });
                }
            },
            getContentByLocalStorage(content) {
                this.content = content.data;
                return Promise.resolve();
            },
            getContentByHTTP(id) {
                return getCategoryContent(id).then(data => {
                return new Promise(resolve => {
                    if (data) {
                    this.content = data;
                    console.log(this.content);
                    resolve();
                    }
                });
                });
            },
            updateLocalStorage(contents, id, curTime) {
                contents = contents || {};
                contents[id] = {};
                contents[id].data = this.content;
                contents[id].updateTime = curTime;
                storage.set(CATEGORY_CONTENT_KEY, contents);
            }
        }
    };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";
  .content-wrapper {
    position: relative;
    height: 100%;
  }
  .loading-container {
    position: absolute;
    top: 0;
    left: 0;
    z-index: $category-popup-z-index;
    @include flex-center();
    width: 100%;
    height: 100%;
    // background-color: $modal-bgc;
    .loading {
      color: #fff;
      font-size: 14px;
    }
  }
  .loading-wrapper {
    width: 50%;
    padding: 30px 0;
    background-color: $modal-bgc;
    border-radius: 4px;
  }
  .content {
    padding: 10px;
  }
  .pic {
    margin-bottom: 12px;
    &-link {
      display: block;
    }
    &-img {
      width: 100%;
    }
  }
  .section {
    margin-bottom: 12px;
    &:last-child {
      margin-bottom: $tabbar-height;
    }
    &-title {
      height: 28px;
      line-height: 28px;
      color: #080808;
      font-weight: bold;
    }
    &-list {
      display: flex;
      flex-wrap: wrap;
      background-color: #fff;
      padding: 10px 10px 0;
    }
    &-item {
      width: (100% / 3);
    }
    &-link {
      display: block;
    }
    &-pic {
      position: relative;
      width: 80%;
      padding-bottom: 80%;
      margin: 0 auto;
    }
    &-img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    &-name {
      height: 36px;
      line-height: 36px;
      text-align: center;
      @include ellipsis();
    }
  }
  .g-backtop-container {
    bottom: 10px;
  }
</style>
