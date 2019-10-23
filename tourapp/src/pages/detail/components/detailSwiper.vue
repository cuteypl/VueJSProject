<template>
    <div class="detailSwiper">
        <router-link to="galary" append>
            <!-- to:galary,跳转到detailGalary页面 -->
            <swiper :options="swiperOption">
                <swiper-slide v-for="item of swiperList" :key="item.id">
                    <div class="img-wrapper">
                        <img class="swiper-img" :src="item.imgUrl">
                    </div>
                    <div class="desc-wrapper">
                        <span class="left">{{item.date}}</span>
                        <span class="middle">编号:{{item.number}}</span>
                        <span class="right">{{item.page}}张</span>
                    </div>
                </swiper-slide>
            </swiper>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'detailSwiper',
    props: {
        swiperList: Array
    },
    data() {
        return {
            swiperOption: {
                loop: true
            }
        }
    }
}
</script>
<style scoped>
    .detailSwiper{
        position: relative;
    }
    .img-wrapper{
        height: 3.6rem;
        background: #ccc;
        overflow: hidden;
    }
    .swiper-img{
        width: 100%;
        /* max-width:100%; */
    }
    .desc-wrapper{
        display:flex;
        position:absolute;
        bottom: 0;
        left:0;
        width:100%;
        justify-content: space-between;
        align-items: center;
        color:#fff;
        font-size:.24rem;
        background:rgba(0,0,0,.1);
    }
    .left{
        padding-left: .4rem;
        color:#fff;
    }
    .middle{
        flex:1;
        padding-right: .1rem;
        text-align: right;
        color:#fff;
    }
    .right{
        padding:.1rem .2rem .1rem .1rem;
        color:#fff;
        /* background:rgba(0,0,0,.2); */
    }
</style>