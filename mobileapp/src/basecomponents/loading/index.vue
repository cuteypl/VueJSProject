<template>
    <div class="loading" :class="{'loading-inline': inline}">
        <span class="loading-indicator" v-if="indicator==='on'">
            <slot><img src="./loading.gif" alt="loading"></slot>
        </span>
        <span class="loading-text" v-if="loadingText">{{loadingText}}</span>
    </div>
</template>

<script>
    export default {
        name: 'BLoading',
        props: {
            indicator: {
                type: String,
                default: 'on',
                validator(value) { return ['on', 'off'].indexOf(value) > -1; }
            },
            text: {
                type: String,
                default: '加载中...'
            },
            inline: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                loadingText: this.text
            };
        },
        watch: {
            text(text) {
                this.loadingText = text;
            }
        },
        methods: {
            setText(text) {
                this.loadingText = text;
            }
        }
};
</script>

<style lang="scss" scoped>
    @import '~assets/scss/mixins';
    .loading{
        width: 100%;
        height: 100%;
        overflow: hidden;
        @include flex-center(column);
        &.loading-inline{
            flex-direction: row;
            .loading-indicator ~ .loading-text{
                margin-top: 0;
                margin-left: 6px;
            }
        }
        .loading-indicator ~ .loading-text{
            margin-top: 6px;
            margin-left: 10px;
        }
    }
</style>
