<template>
  <div class="BNavbar">
      <div class="BNavbar-left" v-if="$slots.left"><slot name="left"></slot></div>
      <div class="BNavbar-center" v-if="$slots.center"><slot name="center"></slot></div>
      <div class="BNavbar-right" v-if="$slots.right"><slot name="right"></slot></div>
      <h1 class="BNavbar-title" v-if="title"><span class="BNavbar-titletext" v-text="title"></span></h1>
  </div>
</template>

<script>
  export default {
    name: 'BNavbar',
    props: {
        title: {
            type: String,
            default: ''
        }
    }
  };
</script>

<style lang="scss" scoped>
    @import '~assets/scss/mixins';
    .BNavbar{
        @include flex-between();
        position: relative;
        height: $navbar-height;
        background-color: #fff;
        &-left{
            margin-left: 10px;
            ~ .BNavbar-right{ /* 当left存在时，让right取消绝对定位 */
                position: static;
            }
        }
        &-center{
            flex: 1;
            margin: 0 10px;
            ~ .BNavbar-right{ /* 当center存在时，让right取消绝对定位 */
                position: static;
            }
        }
        &-right{
            @include flex-center();
            position: absolute;
            right: 0;
            height: 100%;
            margin-right: 10px;
        }
        &-title{
            position: absolute;
            top: 0;
            bottom: 0;
            left: 20%;
            right: 20%;
            font-size: 18px;
            @include flex-center(); /* 由于flex与ellipsis存在冲突，所以在flex父下添加span */
        }
        &-titletext{
            line-height: 1.5; /* 当输入jqjqjq时，字母高度不一致，导致字母baseline下面的部分会被隐藏，加上一个行高撑开span元素高度 */
            font-size: 18px;
            @include ellipsis();
        }
    }
</style>
