<template>
    <div class="weekend">
        <div class="weekend-desc">
            <p class="desc-title"><span>/////////</span>周末出游<span>/////////</span></p>
            <p class="desc-subtitle">致力推荐超完美套餐</p>
        </div>
        <div class="weekend-swiper">
            <swiper :options="swiperOption">
                <swiper-slide v-for="item of weekendList" :key="item.id">
                    <router-link :to='"/detail/"+item.id'>
                        <div class="weekend-item">
                            <img class="item-img" :src="item.imgUrl">
                            <div class="item-desc">
                                <p class="desc-title  one-line">{{item.title}}</p>
                                <p class="desc-subtitle">{{item.subtitle}}</p>
                            </div>
                        </div>
                    </router-link>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
    name: 'homeWeekend',
    props: {
        weekendList: Array
    },
    data() {
        return {
            swiperOption: {
               freeMode: true,
               spaceBetween: 20,
               slidesPerView: 3
            }
        }
    }
}
</script>
<style scoped>
.one-line{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap; 
}
.weekend{
    border-bottom: 10px solid #edf0f5;
}
.weekend-desc{
    padding: 15px 0 10px;
}
.desc-title{
    text-align: center;
    font-size: 0.32rem;
    font-weight: bold;
    color: #000;
}
.desc-title > span{
    margin: 0 20px;
    color: #ccc;
    font-style: italic;
}
.desc-subtitle{
    margin-top: 10px;
    text-align: center;
    color: #666;
}
.weekend-swiper{
    overflow: hidden;
    padding: 0 0 16px 0;
}
.weekend-swiper >>> .swiper-wrapper{
    padding: 0 15px 0 15px;
}
.weekend-swiper >>> .swiper-slide{
    padding-right: 10px;
}
.weekend-item{
    width: 2.62rem;
    padding-bottom: 15px;
    border: 1px solid #ddd;
}
.item-img{
    width: 100%;
    height: 1.9rem;
    margin-bottom: 15px;
}
.weekend-item > .desc-title{
    color: #333;
}
</style>