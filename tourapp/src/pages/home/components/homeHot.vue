<template>
    <div class="hot">
        <div class="hot-left">
            <div class="left-counter">
                <p class="counter-text">限时抢购</p>
                <p class="counter-count">
                    距结束
                    <span>02</span>:
                    <span>04</span>:
                    <span>08</span>
                </p>
            </div>
            <div class="left-content" v-for="item of hotContentList" :key="item.id">
                <router-link class="left-content" :to='"/detail/"+item.id'>
                    <img class="content-img" alt="图片" :src="item.imgUrl">
                    <p class="content-desc multi-line">{{item.desc}}</p>
                </router-link>
            </div>
            <div class="left-prise" v-for="item of hotPriseList" :key="item.id">
                <p class="prise-sale">限量<span>{{item.num}}</span>份</p>
                <p class="prise-num">
                    <span>￥</span><span class="num-center">{{item.prise}}</span><span class="num-right">起</span>
                </p>
            </div>
        </div>
        <div class="hot-right">
            <div class="right-item" v-for="item of hotTrendList" :key="item.id">
                <router-link class="right-item" :to='"/detail/"+item.id'>
                    <div class="item-desc">
                        {{item.desc}}
                        <p>{{item.crite}}</p>
                    </div>
                    <img class="item-img" alt="图片" :src="item.imgUrl">
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'homeHot',
    props: {
        hotTrendList: Array,
        hotPriseList: Array,
        hotContentList: Array
    }
}
</script>
<style scoped>
    .hot{
        display: flex;
        justify-content: space-between;
        align-content: center;
        border-top: 10px solid #edf0f5;
        border-bottom: 10px solid #edf0f5;
        box-shadow:inset 0 0 2px rgba(0,0,0,.3);
    }
    .hot-left,.hot-right{
        flex: 1;
    }
    .hot-left{
        padding: 0 0.16rem;
        align-self: center;
    }
    .left-counter,.left-content,.left-prise{
        display: flex;
        justify-content: space-between;
        align-content: center;
    }
    .left-content{
        margin: 0.2rem 0;
    }
    .left-prise{
        font-size: 0.26rem;
        color: red;
    }
    .counter-text{
        color: red;
        font-weight: bold;
        font-style: italic;
    }
    .counter-count{
        font-size: 0.26rem;
        color: #666;
    }
    .counter-count > span{
        background: #000;
        color: #fff;
    }
    .content-img{
        width: 1rem;
        height: 1rem;
    }
    .content-desc{
        padding-left: 10px;
        color: #333;
        line-height: 1.5;
        align-self: center;
    }
    .multi-line{
        display:-webkit-box;
        text-overflow:ellipsis;
        -webkit-line-clamp:2;
        -webkit-box-orient:vertical;
        overflow: hidden;
    }
    .num-center{
        font-size: 0.4rem;
        font-weight: bold;
    }
    .num-right{
        color: #666;
    }

    .hot-right{
        border-left: 1px solid #ccc;
    }
    a.right-item{
        display: flex;
        justify-content: space-between;
        align-content: center;
        padding-left: 0.16rem;
        color: #000;
    }
    /* a.right-item{
        display: block;
        width: 100%;
    } */
    .right-item + .right-item{
        border-top: 1px solid #ccc;
    }
    .item-desc{
        align-self: center;
        font-weight: bold;
    }
    .item-desc > p{
        margin-top: 0.16rem;
        font-size: 0.26rem;
        color: #666;
        font-weight: normal;
    }
    .item-img{
        width: 1.4rem;
        height: 1.4rem;
    }
</style>