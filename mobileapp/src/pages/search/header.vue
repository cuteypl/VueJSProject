<template>
    <BNavbar class="header">
        <i class="iconfont icon-back" slot="left" @click="goBack"></i>
        <BSearch placeholder="开学季有礼，好货5折起" @query="query" slot="center"></BSearch>
    </BNavbar>
</template>

<script>
    import BNavbar from 'basecomponents/navbar';
    import BSearch from 'basecomponents/search';
    export default {
        name: 'SearchHeader',
        components: {
            BNavbar,
            BSearch
        },
        methods: {
            goBack() { this.$router.back(); },
            query(query) { this.$emit('query', query); } // 再向search的index页抛出query
        }
    };
</script>

<style lang="scss" scoped>
    @import "~assets/scss/mixins";
    .header{
        border-bottom: 1px solid $border-color;
        .iconfont{
            color: $icon-color;
            font-size: $icon-font-size;
        }
        .search-wrapper{
            background-color: #f7f7f7;
        }
    }
</style>
