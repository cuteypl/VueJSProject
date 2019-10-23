<template>
    <BNavbar class="header" id="person-header">
        <div slot="center" class="person-headerText">我的慕淘</div>
        <div slot="right" class="person-headerRight"><i class="iconfont icon-setting"></i><i class="iconfont icon-msg"></i></div>
    </BNavbar>
</template>
<script>
    import BNavbar from 'basecomponents/navbar';
    export default {
        name: 'PersonHeader',
        components: {
            BNavbar
        },
        data() {
            return {
            };
        },
        methods: {
        }
    };
</script>
<style lang="scss" scoped>
    @import '~assets/scss/mixins';
    #person-header{
        &.BNavbar{ /* 相当于:.header.BNavbar，加重其优先级，覆盖BNavbar的背景色#fff */
            background-color: $header-bgc;
        }
        .BNavbar-center .person-headerText{
            padding-left: 10px;
            font-size: 14px;
            color: #fff;
            text-align: center;
        }
        .BNavbar-right .person-headerRight{ // .person-headerRight
            position: absolute; // 绝对定位，使得头部文字水平居中
            right: 0;
        }
        .iconfont{
            margin-right: 10px;
            color: $icon-color-default;
            font-size: $icon-font-size-sm;
        }
    }
</style>
