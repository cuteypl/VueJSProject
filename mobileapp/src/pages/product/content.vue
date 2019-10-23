<template>
  <div class="product-content" v-if='isRender'>
      <div class="product-decs">
        <p class="product-decs-top"><span class="product-price">￥<b class="product-priceNum">{{content.priceText}}</b></span><span class="product-salecount">{{content.sellCount}}件已售</span></p>
        <h3 class="product-decs-name">{{content.title}}</h3>
        <p class="product-decs-bottom"><span class="product-del">{{content.postage}}</span><span class="product-del">月销量{{content.soldCount}}件</span><span class="product-del">{{content.from}}</span></p>
      </div>
      <div class="product-comment">
        <p class="product-comment-top">商品评价({{content.review.totalCount}})</p>
        <ul class="product-comment-category">
          <li class="product-comment-category-item" v-for="item in content.review.keywords" :key='item.attribute'>{{item.word}}<span class="comment-num">({{item.count}})</span></li>
        </ul>
        <ul class="product-comment-list">
          <li class="product-comment-list-item">
            <p class="commenter-info"><img class="commenter-img" :src="content.review.rateList[0].headPic"><span class="commenter-name">{{content.review.rateList[0].userName}}</span></p>
            <p class="comment-content">{{content.review.rateList[0].content}}</p>
            <p class="comment-others"><time>{{content.review.rateList[0].dateTime}}</time><span>{{content.review.rateList[0].skuInfo}}</span></p>
          </li>
        </ul>
      </div>
      <div class="product-store">
        <div class="product-store-top">
          <img class="product-store-img" :src="content.seller.shopIcon">
          <p class="product-store-info"><span class="product-store-name">{{content.seller.shopName}}</span><span class="product-store-brand">天猫</span></p>
          <span class="product-store-btn">全部宝贝</span>
          <span class="product-store-btn">进店逛逛</span>
        </div>
        <div class="product-store-bottom">
          <span v-for="item in content.seller.evaluates" :key="item.title">{{item.title}}&nbsp;<b>{{item.score}}</b>&nbsp;<i class="myiconfont">{{item.levelText}}</i></span>
          <!-- <span>卖家服务&nbsp;<b>4.8</b></span> -->
          <!-- <span>物流服务&nbsp;<b>4.8</b></span> -->
        </div>
      </div>
  </div>
</template>

<script>
  // import {getProductDetails} from 'api/product';
  // import storage from 'assets/js/storage';
  // import {PRODUCT_CONTENT_KEYWORD_KEY} from './config';
  export default {
    name: 'ProductContent',
    data() {
      return {
        // productId: '',
        // // contents: {},
        productdetail: {},
        content: {},
        isRender: true
      };
    },
    props: {
      contents: {
        type: Object,
        default() { return {}; }
      }
    },
    // watch: {
    //   productId(productId) {
    //     this.productId = this.$route.params.id; // $router特有的方法
    //     this.getProductData(this.productId);
    //   }
    // },
    watch: {
      contents(contents) {
        this.content = contents.content;
        console.log(this.content);
      }
    },
    created() {
      // this.productId = this.$route.params.id;
      // console.log(Number(this.productId));
      // this.getProductDatas(Number(this.productId));
      console.log(this.contents);
      this.content = this.contents.content;
      this.productdetail = this.contents;
      if (Object.keys(this.productdetail).length === 0) { // 若没有数据就不要进行渲染了
          this.isRender = false;
      }

      // this.init();
    },
    watch: {
      contents(newVal) {
        this.content = newVal.content;
        if (Object.keys(newVal).length === 0) {
          this.isRender = false;
        } else {
          this.isRender = true;
        }
      }
    },
    methods: {
      // init() {
      //   this.productId = this.$route.params.id; // $router特有的方法
      //   this.getProductData(this.productId);
      //   if (Object.keys(this.productdetail).length === 0) { // 若没有数据就不要进行渲染了
      //     this.isRender = false;
      //   }
      // },
    //   getProductData(id) {
    //     debugger;
    //     return getProductDetails(id).then(data => {
    //       console.log(data);
    //       this.productdetail = data;
    //       storage.set(PRODUCT_CONTENT_KEYWORD_KEY, data);
    //       console.log(this.productdetail);
    //       });
    //   }
    // }
    // watch: {
    //   productId(productId) {
    //     this.getProductData(productId);
    //     // this.productdetail = storage.get(PRODUCT_CONTENT_KEYWORD_KEY, {});
    //     console.log(this.productdetail);
    //     if (Object.keys(this.productdetail).length === 0) { // 若没有数据就不要进行渲染了
    //       this.isRender = false;
    //     }
    //     this.isRender = true;
    //   }
    }
};
</script>

<style lang="scss" scoped>
  @import '~assets/scss/mixins';
  .product-decs{
    margin-bottom: 10px;
    background: #fff;
    &-top{
      display: flex;
      padding: 10px 6px;
      justify-content: space-between;
      align-items: center;
      background: rgb(201, 50, 100);
      font-size: 13px;
      color: #fff;
      .product-priceNum{
        font-size: 16px;
      }
    }
    &-name{
      padding: 12px 6px;
      line-height: 1.2;
      font-size: 15px;
      font-weight: bold;
    }
    &-bottom{
      display: flex;
      padding: 0 8px 10px;
      justify-content: space-between;
      color: #aaa;
    }
  }
  .product-comment{
    background: #fff;
    padding: 0 8px;
    margin-bottom: 10px;
    &-top{
      font-size: 15px;
      padding: 10px 0;
    }
    &-category{
      display: flex;
      flex-wrap: wrap;
      &-item{
        padding: 5px;
        margin: 0 6px 6px;
        border-radius: 10px;
        background: antiquewhite;
      }
    }
    &-list{
      &-item{
        .commenter-info{
          display: flex;
          align-items: center;
          padding-top: 6px;
          .commenter-img{
            width: 24px;
            height: 24px;
          }
        }
        .comment-content{
          padding: 8px;
          line-height: 1.2;
        }
        .comment-others{
          padding: 0 8px 8px;
          color: #aaa;
          time{
            margin-right: 6px;
          }
        }
      }
    }
  }
  .product-store{
    padding: 10px;
    margin-bottom: 30px;
    background: #fff;
    &-top{
      display: flex;
      justify-content: space-between;
      align-items: center;
      .product-store-img{
        width: 40px;
        height: 40px;
        margin-right: 8px;
      }
      .product-store-info{
        display: flex;
        flex: 1;
        flex-direction: column;
        font-size: 14px;
        .product-store-brand{
          width: 36px;
          padding: 3px 0 1px;
          border-radius: 10px;
          background: rgb(223, 54, 54);
          font-size: 10px;
          color: #fff;
          text-align: center;
        }
      }
      .product-store-btn{
        padding: 6px;
        border: 1px solid orange;
        border-radius: 16px;
      }
      .product-store-btn ~ .product-store-btn{
        color: orange;
        margin-left: 6px;
      }
      .product-store-btn + .product-store-btn{
        color: #fff;
        background: orange;
      }
    }
    &-bottom{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 0 56px;
      color: #aaa;
      .myiconfont{
        color: red;
      }
    }
  }
</style>
