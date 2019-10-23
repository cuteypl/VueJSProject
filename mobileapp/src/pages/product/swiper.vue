<template>
    <div class="swiper">
        <BLoading :indicator="indicator" :text="text" :inline="inline" v-if="!slidersArr.length"></BLoading>
        <BSwipper :slidersArr="slidersArr" :loop="loop" :interval="interval" :pagination="pagination" v-else> <!-- v-if="slidersArr.length" -->
            <swiper-slide v-for="(item,index) in slidersArr" :key="index">
                <a href="javascript:;" alt="" class="slider-link">
                    <img :src="item" alt="" class="slider-pic">
                </a>
            </swiper-slide>
        </BSwipper>
    </div>
</template>

<script>
    import BSwipper from 'basecomponents/swiper';
    import {swiperSlide} from 'vue-awesome-swiper';
    import {swiperOptions, loadingOptions} from './config';
    import BLoading from 'basecomponents/loading';
    export default {
        name: 'ProductSwiper',
        components: {
            BSwipper,
            swiperSlide,
            BLoading
        },
        props: {
            slidersArr: {
                type: Array,
                default() { return [ require('../../assets/images/404.png') ]; }
            }
        },
        created() {
                this.init();
        },
        methods: {
            init() {
                // 初始化传递给swiper组件的参数
                this.direction = swiperOptions.direction;
                this.loop = swiperOptions.loop;
                this.interval = swiperOptions.interval;
                this.pagination = swiperOptions.pagination;
                // 初始化传递给loading组件的参数
                this.indicator = loadingOptions.indicator;
                this.text = loadingOptions.text;
                this.inline = loadingOptions.inline;
                // 在这里初始化slidersArrData，可以是轮播前后复制的slider不失效，不为空白
                // console.log(this.slidersArr);
                // this.slidersArrData = this.slidersArr;
            }
        }
    };
</script>

<style lang="scss" scoped>
    .swiper{
        width: 100%;
        height: 300px;
    }
    .slider-link{
        display: block;
    }
    .slider-link,.slider-pic{
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
</style>
