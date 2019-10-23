<template>
    <transition name="backtop">
        <a href="javascript:;" class="backtop" v-show="visible" @click="backToTop" ><i class="iconfont icon-backtop"></i></a>
    </transition>
</template>

<script>
    export default {
        name: 'BBacktop',
        props: {
            visible: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            backToTop() {
                this.$emit('backtop'); // BBacktop作为一个基础组件，一般不处理业务逻辑，所以这里向外抛出backtop事件，在调用的地方实现backtop
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import '~assets/scss/mixins';
    .backtop{
        @include flex-center();
        width: 45px;
        height: 45px;
        border: none;
        border-radius: 50%;
        background-color: rgba(0,0,0,.6);
        overflow: hidden;
    }
    .iconfont{
        color: #fff;
        font-size: 38px;
    }
    .backtop { // backtop显示隐藏的过渡动画
        &-enter-active,
        &-leave-active{
            transition: opacity 0.4s;
        }
        &-enter,
        &-leave-to{
            opacity: 0;
        }
    }
</style>
