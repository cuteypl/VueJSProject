<template>
    <div class="detailHeader">
        <div class="left" @click="handleBackClick"><span class="iconfont">&#xe79b;</span></div>
        <div class="middle">景点+酒店</div>
        <div class="right"><span class="iconfont">&#xe637;</span></div>
    </div>
</template>

<script>
export default {
    name: 'detailHeader',
    data() {
        return {}
    },
    methods: {
        handleBackClick(){
            this.$router.go(-1);
        }
    },
}
</script>
<style scoped>
    .detailHeader{
        display:flex;
        height: .88rem;
        background:#fff;
        line-height:.88rem;
        box-sizing: border-box;
    }
    .left{
        float:left;
        margin-left:.2rem;
        color:#23beae;
    } 
    .iconfont{
        font-size: 24px;
    }
    .middle{
        flex:1;
        text-align:center;
        font-weight:bold;
        font-size: 18px;
    }
    .right{
        float:right;
        padding-right:.3rem;
        color:#23beae;
    }
</style>