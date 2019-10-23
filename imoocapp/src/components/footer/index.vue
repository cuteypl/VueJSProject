<template>
    <nav class="footer">
        <a href="javascript:;" class="active"><img src="../../assets/home.png"><p>首页</p></a>
        <a href="javascript:;"><img src="../../assets/see.png"><p>发现</p></a>
        <a href="javascript:;"><img src="../../assets/download.png"><p>下载</p></a>
        <a href="javascript:;"><img src="../../assets/me.png"><p>我的</p></a>
    </nav>
</template>
<style scoped>
    .footer{
        position: fixed;
        display: flex;
        bottom: 0;
        width: 100%;
        height: 1rem;
        background: #fff;
        box-shadow: inset 0 1px 1px 0 #d9dde1;
        justify-content: space-between;
        align-items: center;
    }
    .footer a{
        width: 20%;
        text-align: center;
    }
    .footer img{
        width: .48rem;
        height: .48rem;
    }
    .footer p{
        font-size: .2rem;
    }
    a.active{
        color: #f01414;
    }
</style>