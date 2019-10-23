<template>
    <div class="search-wrapper">
        <i class="iconfont icon-search"></i>
        <div class="search-box" v-if="fake">{{placeholder}}</div>
        <input class="search-box" type="text" v-if="!fake" title="搜索框" :placeholder="placeholder" v-model="query" ref="input">
        <i class="iconfont icon-close" v-show="query" @click="reset"></i>
    </div>
</template>

<script>
    import {debounce} from 'assets/js/util';
    export default {
        name: 'BSearch',
        props: {
             fake: {
                type: Boolean,
                default: false
            },
            placeholder: {
                type: String,
                default: '请输入搜索内容'
            }
        },
        data() {
            return {
                query: ''
            };
        },
        watch: {
            query: debounce(function () { // debounce节流函数
                this.$emit('query', this.query);
            })
        },
        methods: {
            focus() { this.$refs.input && this.$refs.input.focus(); },
            clear() { this.query = ''; },
            reset() {
                this.clear();
                this.focus();
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import "~assets/scss/mixins";
    $search-box-height: 30px;
    .search-wrapper{
        display: flex;
        width: 100%;
        height: $search-box-height;
        padding: 0 7px;
        background-color: #fff;
        border-radius: $search-box-height / 2;
        align-items: center;
    }
    .iconfont{
        color: $icon-color;
        font-size: $icon-font-size-sm;
        font-weight: bold;
    }
    .search-box{
        flex: 1;
        margin: 0 6px;
        border: none;
        background: none;
        color: #666;
        line-height: 1.5;
    }

</style>
