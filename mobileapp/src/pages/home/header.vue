<template>
    <BNavbar class="header" v-show="visible">
        <i class="iconfont icon-scan" slot="left"></i>
        <!-- <div slot="center">搜索框</div> -->
        <BSearch fake placeholder="开学季有礼，好货5折起" @query="getQuery" @click.native="goToSearch" slot="center"></BSearch> <!-- 自定义组件不能直接使用click，想使用原生的click需要加上native -->
        <i class="iconfont icon-msg" slot="right"></i>
    </BNavbar>
</template>
<script>
    import BNavbar from 'basecomponents/navbar';
    import BSearch from 'basecomponents/search';
    export default {
        name: 'HomeHeader',
        components: {
            BNavbar,
            BSearch
        },
        data() {
            return {
                visible: true
            };
        },
        methods: {
            show() { this.visible = true; },
            hide() { this.visible = false; },
            getQuery(query) { console.log(query); },
            goToSearch() { this.$router.push('/search'); } // $router相当于location.history
        }
    };
</script>
<style lang="scss" scoped>
    @import '~assets/scss/mixins';
    .header{
        &.BNavbar{ /* 相当于:.header.BNavbar，加重其优先级，覆盖BNavbar的背景色#fff */
            background-color: transparent;
            transition: background-color 0.5s; // 头部导航背景色随滚动距离而渐变
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
