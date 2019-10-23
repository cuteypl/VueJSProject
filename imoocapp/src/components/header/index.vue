<template>
    <div class="header">
        <nav class="header-nav"><a href="javascript:;">推荐</a><a href="javascript:;" class="active">课程</a><a href="javascript:;">实战</a><a href="javascript:;">职业路线</a></nav>
        <div class="header-icon"> 
            <img class="header-search" src="../../assets/search@2x.png">
            <img class="header-history" src="../../assets/history@2x.png">
        </div>
    </div>
</template>

<style scoped>
    .header{
        position: fixed;
        display: flex;
        top: 0;
        width: 100%;
        height: .9rem;
        background: #fff;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,.10);
        justify-content: space-between;
        align-items: center;
    }
    .header-nav{
        padding: 0 .2rem;
        font-size: 0; /* 若上面a标签换行的话，使得a标签之间的空格间隙0 */
    }
    .header-nav a{
        display: inline-block;
        padding: .10rem .2rem;
        font-size: .32rem;
        color: #71777d;
    }
     .header-nav .active{
        position: relative;
        color: #2b332b;
    }
    .header-nav .active::after{
        display: inline-block;
        position: absolute;
        width: .35rem;
        height: 2px;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        content: '';
        background: #f01414;
    }
    .header-search,.header-history{
        width: .36rem;
        height: .36rem;
        margin: .12rem .4rem 0 0;
    }
</style>