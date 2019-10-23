<template>
    <div class="swiper">
        <BLoading :indicator="indicator" :text="text" :inline="inline" v-if="!slidersArr.length"></BLoading>
        <BSwipper :slidersArr="slidersArr" :loop="loop" :interval="interval" :pagination="pagination" v-else> <!-- v-if="slidersArr.length" -->
            <swiper-slide v-for="(item,index) in slidersArr" :key="index">
                <a href="item.linkUrl" alt="" class="slider-link">
                    <img :src="item.picUrl" alt="" class="slider-pic">
                </a>
            </swiper-slide>
        </BSwipper>
    </div>
</template>

<script>
    import BSwipper from 'basecomponents/swiper';
    import {swiperSlide} from 'vue-awesome-swiper';
    import {swiperOptions, loadingOptions} from './config';
    import {getHomeSlider} from 'api/home';
    import BLoading from 'basecomponents/loading';
    export default {
        name: 'HomeSwiper',
        components: {
            BSwipper,
            swiperSlide,
            BLoading
        },
        data() {
            return {
                slidersArr: []
            };
        },
        created() {
                this.init();
                this.getSlidersArr();
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
            },
            getSlidersArr() {
                return getHomeSlider().then(data => { this.slidersArr = data; });
            },
            update() {
                return this.getSlidersArr();
            }
        }
    };
</script>

<style lang="scss" scoped>
    .swiper{
        width: 100%;
        height: 183px;
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
