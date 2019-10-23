<template>
    <div class="banner">
        <swiper :options="swiperOption">
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'homeSwiper',
    props: {
        swiperList: Array
    },
    data() {
        return {
            swiperOption: {
                pagination: {
                    el:'.swiper-pagination',
                    clickable: true,
                    type: "bullets"
                },
                autoplay: {
                    delay: 3000,
                    disableOninteraction: true
                },
                loop:true
            },
        }
    },
    watch: {  },
    computed: {  },
    methods: {  },
    created() {  },
    mounted() {  }
}
</script>
<style scoped>
    .banner{
        width: 100%;
        height: 156px;
    }
    .banner >>> .swiper-pagination-bullet-active{
        background: #fff;
    }
    .swiper-img{
        width: 100%;
        height: 156px;
    }
</style>