<template>
    <swiper :options="swiperOptions" :key="keyId">
        <slot></slot>
    <div class="swiper-pagination" v-if="pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
    import {swiper} from 'vue-awesome-swiper';
    export default {
        name: 'BSwiper',
        components: {
            swiper
        },
        props: {
            direction: {
                type: String,
                default: 'horizontal',
                validator(value) {
                    return ['horizontal', 'vertical'].indexOf(value) > -1;
                }
            },
            interval: {
                type: Number,
                default: 3000,
                validator(value) {
                    return value >= 0;
                }
            },
            loop: {
                type: Boolean,
                default: true
            },
            pagination: {
                type: Boolean,
                default: true
            },
            slidersArr: {
                type: Array,
                default() { return []; } // []不是基本类型，需要返回引用，不能default: []
            }
        },
        data() {
            return { keyId: Math.random() };
        },
        watch: {
            slidersArr(newSlidersArr) {
                if (newSlidersArr.length === 0) {
                    return;
                }
                this.swiperOptions.loop = newSlidersArr.length <= 1 ? false : this.loop;
                // key的特殊属性主要用在vue的虚拟DOM算法，更新它会完整地触发组件或元素的生命周期钩子
                // 若不给swiper设置key,则当下拉刷新swiper后，会遗留由于开启循环而复制的slider
                this.keyId = Math.random();
            }
        },
        created() { this.init(); },
        methods: {
            init() {
                this.swiperOptions = {
                    watchOverflow: true,
                    direction: this.direction,
                    autoplay: this.interval ? {deplay: this.interval, disableOnInteraction: false} : false,
                    slidesPerView: 1,
                    loop: this.slidersArr.length <= 1 ? false : this.loop,
                    pagination: {el: this.pagination ? '.swiper-pagination' : null}
                };
            }
        }
    };
</script>

<style lang="scss" scoped>
    .swiper-container{
        width: 100%;
        height: 100%;
    }
</style>
