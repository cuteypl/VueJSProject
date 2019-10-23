<template>
    <swiper :options="scrollOptions" class="scroll" ref='swiper'>
        <div class="scroll-pulldown" v-if="pullDown"><BLoading :text="pullDownText" inline ref="pullDownLoading"></BLoading></div>
        <swiper-slide><slot></slot></swiper-slide>
        <div class="scroll-pullUp" v-if="pullUp"><BLoading :text="pullUpText" inline ref="pullUpLoading"></BLoading></div>
        <div class="swiper-scrollbar" v-if="scrollbar" slot="scrollbar"></div>
    </swiper>
</template>

<script>
    import {swiper, swiperSlide} from 'vue-awesome-swiper';
    import BLoading from 'basecomponents/loading';
    import {PULL_DOWN_HEIGHT, PULL_DOWN_TEXT_INIT, PULL_DOWN_TEXT_START, PULL_DOWN_TEXT_ING, PULL_DOWN_TEXT_END, PULL_UP_HEIGHT, PULL_UP_TEXT_INIT, PULL_UP_TEXT_START, PULL_UP_TEXT_END, PULL_UP_TEXT_ING} from './config';
    export default {
        name: 'BScroll',
        components: {
            swiper,
            swiperSlide,
            BLoading
        },
        props: {
            scrollbar: {
                type: Boolean,
                default: true
            },
            postlistArr: { // 接收HomePostlist组件传递过来的参数，在index.vue中，监听该参数变化刷新滚动条
                type: [Array, Object]
            },
            pullDown: {
                type: Boolean,
                default: false
            },
            pullUp: {
                type: Boolean,
                default: false
            }
        },
        watch: {
            postlistArr() { // 监听postlistArr参数的变化，执行刷新滚动条，主要是上拉加载数据后，刷新滚动条，重新获取内容高度，使scroll能正常操作
                this.update();
            }
        },
        created() { this.init(); },
        methods: {
            init() {
                this.scrollOptions = {
                    direction: 'vertical',
                    slidesPerView: 'auto', // 可视区可预览的slide数，这里为自适应
                    freeMode: true, // 自由模型，滚动切换距离任意
                    setWrapperSize: true, // 自动获取内容高度，并给swiper-wrapper设置style="height:xxxpx"
                    scrollbar: {
                        el: this.scrollbar ? '.swiper-scrollbar' : null,
                        hide: true // 当不操作时，滚动条会自动隐藏
                    },
                    on: {
                        sliderMove: this.scroll, // swiper中有一个sliderMove，当移动slider时执行scroll
                        touchEnd: this.touchEnd, // swiper中有一个touchEnd，当释放swiper时触发touchEnd
                        transitionEnd: this.scrollEnd // swiper中有一个transitionEnd，可以用来监听滚动结束时机(滚动有一定的惯性，当松手时，滚动仍尚未结束，而是继续滑一定距离才停止)，执行scrollEnd方法
                    }
                };
                this.pulling = false; // 标志是否已经在下拉或上拉刷新数据中，防止数据的重复刷新
                this.pullDownText = PULL_DOWN_TEXT_INIT;
                this.pullUpText = PULL_UP_TEXT_INIT;
            },
            update() { // 刷新滚动条，swiper有一个update()方法可以调用其进行刷新，需要在上面的swiper标签中ref='swiper',获取到swiper对象,$refs为vue获取操作dom对象的方法
                this.$nextTick(() => { this.$refs.swiper && this.$refs.swiper.swiper.update(); }); // $nextTick()确保在Dom更新完成后调用刷新
            },
            scroll() { // 监听滚动，执行下拉 或 下拉事件
                const swiper = this.$refs.swiper.swiper;
                this.$emit('scroll', swiper.translate, this.$refs.swiper.swiper); // 向外抛出scroll自定义事件及一些数据
                if (this.fulling) { return; }
                if (swiper.translate > 0) { // 上拉 translate是swiper的属性
                    if (!this.pullDown) { return; }
                    if (swiper.translate > PULL_DOWN_HEIGHT) { // 上拉超过这个高度，就更换loading提示文字
                        this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_START);
                    } else {
                        this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_INIT);
                    }
                } else if (swiper.isEnd) { // 下拉 isEnd是swiper的属性，是否滚动到底部
                    if (!this.pullUp) { return; }
                    const ispullUp = Math.abs(swiper.translate) + swiper.height - parseInt(swiper.$wrapperEl.css('height')) > PULL_UP_HEIGHT;
                    if (ispullUp) {
                        this.$refs.pullUpLoading.setText(PULL_UP_TEXT_START);
                    } else {
                        this.$refs.pullUpLoading.setText(PULL_UP_TEXT_INIT);
                    }
                }
            },
            touchEnd() {
                if (this.pulling) { return; }
                const swiper = this.$refs.swiper.swiper;
                if (swiper.translate > PULL_DOWN_HEIGHT) {
                    if (!this.pullDown) { return; }
                    this.pulling = true; // 已经在刷新数据，由于这里已经禁止触摸了，所以没有效果，如果没有禁止触摸的话，则该pulling能防止多次刷新数据
                    swiper.allowTouchMove = false; // swiper自带属性，禁止触摸
                    swiper.setTransition(swiper.params.speed); // swiper自带方法，设置过渡时间 swiper.params.speed默认会有300ms
                    swiper.setTranslate(PULL_DOWN_HEIGHT); // swiper自带方法，设置移动距离
                    swiper.params.virtualTranslate = true; // swiper自带属性，虚拟的位移，可以用来使Swiper的滑动停止（锁定）;params为swiper的初始化参数对象
                    this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_ING); // 设置loadding中的文字
                    this.$emit('pullDownEnd', this.pullDownEnd); // 抛出一个下拉松开手后的自定义事件为pullDownEnd，松开手后执行pullToRefreshSlider，刷新完成后再调用pullDownEnd
                } else if (swiper.isEnd) {
                    const totalHeight = parseInt(swiper.$wrapperEl.css('height'));
                    const ispullUp = Math.abs(swiper.translate) + swiper.height - totalHeight > PULL_UP_HEIGHT;
                    if (ispullUp) {
                        if (!this.pullUp) { return; }
                        this.pulling = true;
                        swiper.allowTouchMove = false;
                        swiper.setTransition(swiper.params.speed);
                        swiper.setTranslate(-(totalHeight + PULL_UP_HEIGHT - swiper.height)); // swiper.height为屏幕高
                        swiper.params.virtualTranslate = true;
                        this.$refs.pullUpLoading.setText(PULL_UP_TEXT_ING);
                        this.$emit('pullUpEnd', this.pullUpEnd); // 抛出一个上拉松开手后的自定义事件pullUpEnd，告知home首页加载热卖推荐商品数据
                    }
                }
            },
            pullDownEnd() {
                const swiper = this.$refs.swiper.swiper;
                this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_END);
                this.pulling = false; // 刷新数据结束
                swiper.params.virtualTranslate = false;
                swiper.allowTouchMove = true;
                swiper.setTransition(swiper.params.speed);
                console.log(swiper.params);
                swiper.setTranslate(0);
                setTimeout(() => { this.$emit('pullDownTransitionEnd'); }, swiper.params.speed);
            },
            pullUpEnd() {
                const swiper = this.$refs.swiper.swiper;
                this.pulling = false;
                this.$refs.pullUpLoading.setText(PULL_UP_TEXT_END);
                swiper.params.virtualTranslate = false;
                swiper.allowTouchMove = true;
            },
            scrollEnd() {
                const swiper = this.$refs.swiper.swiper;
                // 向外抛出scrollEnd滚动结束事件，告知滚动结束，以便执行滚动结束后的操作，如是否显示backtop按钮，是否加载数据等
                this.$emit('scrollEnd', swiper.translate, swiper, this.pulling);
            },
            scrollToTop(speed, runCallbacks) {
                this.$refs.swiper && this.$refs.swiper.swiper.slideTo(0, speed, runCallbacks); // swiper提供一个slideTo跳转到哪一张幻灯片，这里使用speed和runCallbacks为默认参数
            }
        }
};
</script>

<style lang="scss" scoped>
    .scroll{
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .swiper-slide{
        height: auto;
    }
    .scroll-pulldown, .scroll-pullUp{
        position: absolute;
        left: 0;
        width: 100%;
    }
    .scroll-pulldown{
        bottom: 100%;
        height: 80px;
    }
    .scroll-pullUp{
        top: 100%;
        height: 30px;
    }
</style>
