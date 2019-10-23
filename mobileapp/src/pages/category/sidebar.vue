<template>
    <BScroll :scrollbar="false"> <!--传的不是字符串要加冒号-->
        <ul class="sidebar">
            <li class="sidebar-item" v-for="(item,index) in categoryNames" :key="index" :class="{'sidebar-itemActive': item.id === curId}" @click="switchTab(item.id)">{{item.name}}</li>
        </ul>
    </BScroll>
</template>

<script>
    import BScroll from 'basecomponents/scroll';
    import {categoryNames} from './config';
    export default {
        name: 'CategorySidebar',
        components: {
            BScroll
        },
        data() {
            return {
                curId: ''
            };
        },
        created() {
            this.init();
            this.switchTab(this.categoryNames[0].id);
        },
        methods: {
            init() { this.categoryNames = categoryNames; },
            switchTab(id) {
                if (this.curId === id) { return; }
                this.curId = id;
                this.$emit('switchTabEvent', id);
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import '~assets/scss/mixins';
    $tab-item-height: 46px;
    .sidebar{
        width: 100%;
        &-item {
            height: $tab-item-height;
            background-color: #fff;
            border-right: 1px solid $border-color;
            border-bottom: 1px solid $border-color;
            color: #080808;
            font-size: $font-size-l;
            font-weight: bold;
            text-align: center;
            line-height: $tab-item-height;
            @include ellipsis();
            &:last-child{
                border-bottom: none;
            }
        }
        &-itemActive{
            background: none;
            border-right: none;
            color: #f23030;
        }
    }
</style>
