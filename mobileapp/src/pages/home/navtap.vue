<template>
    <div class="navtap">
        <nav class="navtap-list">
            <a v-for="(item,index) in navtapItems" :key="index" class="navtap-item"> <!-- :href="item.linkUrl" -->
                <img :src="item.picUrl" class="navtap-pic">
                <p class="navtap-text">{{item.text}}</p>
            </a>
        </nav>
    </div>
</template>

<script>
    import {navtapItems} from './config';
    export default {
        name: 'HomeNavtap',
        components: {},
        props: {},
        watch: {},
        computed: {},
        methods: {},
        created() { this.navtapItems = navtapItems; },
        mounted() {}
};
</script>
<style lang="scss" scoped>
    @import '~assets/scss/mixins';
    .navtap{
        padding-top: 15px;
        background: #fff;
    }
    .navtap-list{
        @include flex-between();
        flex-wrap: wrap;
        width: 100%;
    }
    .navtap-item{
        @include flex-center(column);
        width: 20%;
        margin-bottom: 15px;
    }
    .navtap-pic{
        width: 60%;
        margin-bottom: 8px;
    }
</style>
