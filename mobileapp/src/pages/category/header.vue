<template>
    <BNavbar class="header">
        <BSearch placeholder="开学季有礼，好货5折起" @query="query" slot="center"></BSearch>
        <i class="iconfont icon-msg" slot="right"></i>
    </BNavbar>
</template>

<script>
    import BNavbar from 'basecomponents/navbar';
    import BSearch from 'basecomponents/search';
    export default {
        name: 'CategoryHeader',
        components: {
            BNavbar,
            BSearch
        },
        methods: {
            query(query) { this.$emit('query', query); }
            // goToSearch() { this.$router.push('/search'); } // $router相当于location.history
        }
    };
</script>

<style lang="scss" scoped>
    @import '~assets/scss/mixins';
    .BNavbar.header{ // .BNavbar为BNavbar组件特有的class名
        background-color: $header-bgc-translucent;
    }
    .iconfont{
        color: $icon-color-default;
        font-size: $icon-font-size;
    }
</style>
