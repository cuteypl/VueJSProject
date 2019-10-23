<template>
    <BNavbar class="header" v-show="visible">
        <i class="iconfont icon-back" @click="goBack" slot="left"></i>
        <div class="product-headerC" slot="center">商品详情</div>
        <i class="iconfont icon-cart" slot="right"></i>
    </BNavbar>
</template>
<script>
    import BNavbar from 'basecomponents/navbar';
    export default {
        name: 'ProductHeader',
        components: {
            BNavbar
        },
        data() {
            return {
                visible: true
            };
        },
        methods: {
            show() { this.visible = true; },
            hide() { this.visible = false; },
            goBack() { this.$router.back(); }
        }
    };
</script>
<style lang="scss" scoped>
    @import '~assets/scss/mixins';
    .header{
        &.BNavbar{ /* 相当于:.header.BNavbar，加重其优先级，覆盖BNavbar的背景色#fff */
            background-color: $header-bgc;
            transition: background-color 0.5s; // 头部导航背景色随滚动距离而渐变
        }
        .BNavbar-center .product-headerC{
            font-size: 16px;
            text-align: center;
            color: #fff;
        }
        .iconfont{
            color: $icon-color-default;
            font-size: $icon-font-size;
        }
        &.header-transition{
            background-color: $header-bgc-translucent; // 头部导航背景色随滚动距离而渐变
        }
    }
</style>
