<template>
    <div class="postlist">
        <h3 class="postlist-title">热卖推荐</h3>
        <div class="loading-container" v-if="!postlist.length"><BLoading inline></BLoading></div>
        <ul class="postlist-list" v-else>
            <li class="postlist-item" v-for="(item,index) in postlist" :key="index">
                <router-link class="postlist-link" :to="{name: 'product', params: {id: item.baseinfo.itemId}}">
                    <p class="postlist-pic"><img class="postlist-img" v-lazy="item.baseinfo.picUrlNew"></p>
                    <p class="postlist-name">{{item.name.shortName}}</p>
                    <p class="postlist-origPrice"><del>￥{{item.price.origPrice}}</del></p>
                    <p class="postlist-info">
                        <span class="postlist-price"><strong class="postlist-price-num">{{item.price.actPrice}}</strong></span>
                        <span class="postlist-count">{{item.remind.soldCount}}件已售</span>
                    </p>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import {getHomePostlist} from 'api/home.js';
    import BLoading from 'basecomponents/loading';
    export default {
        name: 'HomePostlist',
        components: {
            BLoading
        },
        props: {},
        data() {
            return {
                postlist: [],
                curPage: 1,
                totalPage: 1
            };
        },
        watch: {},
        computed: {},
        created() { this.getPostlist(); },
        mounted() {},
        methods: {
            update() {
                return this.getPostlist();
            },
            getPostlist() {
                if (this.curPage > this.totalPage) { return Promise.reject(new Error('没有更多了')); }
                return getHomePostlist(this.curPage)
                        .then(data => {
                            return new Promise(resolve => {
                                if (data) {
                                    this.curPage++;
                                    this.totalPage = data.totalPage;
                                    this.postlist = this.postlist.concat(data.itemList);
                                    this.$emit('loaded', this.postlist); // 获取完成数据后，暴露loaded方法并传递postlist数据
                                    resolve(); // 执行resolve,返回promise对象
                                }
                            });
                        });
            }
        }
    };
</script>

<style lang="scss" scoped>
   @import '~assets/scss/mixins';
   .postlist{
       &-title{
           position: relative;
           width: 100%;
           padding: 10px 0;
           font-size: $font-size-l;
           text-align: center;
           &::before, &::after{
               position: absolute;
               content: '';
               top: 50%;
               width: 40%;
               height: 1px;
               background: #ddd;
           }
           &::before{
               left: 0;
           }
           &::after{
               right: 0;
           }
       }
       &-list{
           @include flex-between();
           flex-wrap: wrap;
       }
       &-item{
           width: 49%;
           margin-bottom: 8px;
           background: #fff;
           box-shadow: 0 1px 1px 0 rgba(0,0,0,.12);
       }
       &-link{
           display: block;
       }
       &-pic{
           position: relative;
           width: 100%;
           height: 0;
           padding-top: 100%;
           margin-bottom: 5px;
       }
       &-img{
           position: absolute;
           top: 0;
           left: 0;
           width: 100%;
           height: 100%；
       }
       &-name{
           height: 36px;
           padding: 0 5px;
           margin-bottom: 8px;
           line-height: 1.5;
           @include multiline-ellipsis();
       }
       &-origPrice{
           padding: 0 5px;
           margin-bottom: 8px;
           color: #ccc;
       }
       &-info{
           @include flex-between();
           padding: 0 5px;
           margin-bottom: 8px;
       }
       &-price{
           color: #e61414;
       }
       &-price-num{
           font-size: 20px;
       }
       &-count{
           color: #999;
       }
   }
   .loading-container{
       padding-top: 100px;
   }
</style>
