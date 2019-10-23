<template>
    <router-link to="map" append>
        <div class="detailMap">
            <div class="map-left">
                <div class="map-left-desc"><span>上海</span><span class="address">酒店地址</span></div>
                <div class="map-left-address">无锡滨湖区马山环山西路68号</div>
            </div>
            <div class="map-right">
                <div class="desc">地图</div>
                <div class="icon">></div>
            </div>
        </div>
    </router-link>        
</template>

<script>
export default {
    name: 'detailMap',
}
</script>
<style scoped>
    .detailMap{
        height:1.5rem;
        margin: .2rem 0;
        background:#fff;
        font-size:.3rem;
    }
    .map-left{
        float:left;
        width:80%;
    }
    .map-left-desc{
        margin-left:.2rem;
        margin-top:.2rem;
        margin-bottom:.2rem;
        font-weight:bold;
    }
    .address{
        margin-left: .2rem;
        /* border:.02rem solid #000; */
        font-size: .28rem;
        color:#aaa;
    }
    .map-left-address{
        padding:.2rem;
        color:#aaa;
    }
    .map-right{
        float:right;
        width:20% ;
        text-align:center;
        position:relative;
    }
    .desc{
        position:absolute;
        top:.6rem;
        right:.6rem;
        color:#aaa;
    }
    .icon{
        position:absolute;
        top:.6rem;
        right:.2rem;
    }
</style>