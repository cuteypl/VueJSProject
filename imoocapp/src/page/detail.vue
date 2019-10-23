<template>
    <div class="detail-page">
        <div class="video">
            <video src="http://v3.mukewang.com/shizhan/59f8498ae420e5be578b459b/H.mp4" controls="controls"></video>
            <router-link to="/"><div class="detail-backarrow"></div></router-link>
        </div>
        <ul class="detail-nav">
            <li v-for="(item,index) in nav_arrList" v-bind:key="index" class="active">{{item}}</li>
        </ul>
        <div class="title">
            <h1>{{title}}</h1>
            <p>{{desc}}</p>
            <div class="detail-downarrow"></div>
        </div>
        <ul class="question">
            <li v-for="(item,index) in ans_arrList" v-bind:key="index">
                <h1>{{que_arrList[index]}}</h1>
                <p v-html="item"></p>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                nav_arrList:[],
                title: '',
                desc: '',
                que_arrList:[],
                ans_arrList:[]
            }
        },
        mounted(){
            this.nav_arrList = ['章节','详情','评论','问答','笔记'];
            this.title = 'ios基础教程之-Camera摄像头';
            this.desc = '从实例出发介绍我们的Camera，可以实现Camera属性检测，照片拍摄，视频录制，图片展示，录制视频';
            this.que_arrList = ['课程须知','老师告诉你能学到什么？'];
            this.ans_arrList = [`本课程适合客户端产品经理，研发人员以及对iOS新特性感兴趣的人群`,`(1)数码相机相关的所有API<br/> 
			(2)利用Camera实现相机的各种属性检测<br/> 
			(3)利用Camera拍照、保存、遍历相册等功能<br/>
			(4)利用Camera拍摄视频、视频剪切功能`]
        }
    }
</script>
<style scoped>
    .detail-page{
        background: #eee;
    }
    .video{
        position: relative;
        width: 100%;
        height: 191px;
        background: #fff;
    }
    .video video{
        width: 100%;
        height: 100%;
    }
    .detail-backarrow{
        position: absolute;
        width: .64rem;
        height: .64rem;
        top: .32rem;
        left: .32rem;
        border-radius: 2px;
        background: url("../assets/arrowleft.png") no-repeat center;
        background-color: rgba(0,0,0,.5);
        text-align: center;
        line-height: .64rem;
        color: #fff;
    }
    .detail-nav{
        position: relative;
        display: flex;
        height: .9rem;
        background: #fff;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,.1); /* 需要设置其显示在上层，即要设置z-index：1 */
        z-index: 1;
    }
    .detail-nav li{
        flex: 1;
        line-height: .54rem;
        color: #71777d;
    }
    .detail-nav .active{
        color: #2b332b;
    }
    .detail-nav .active::after{
        display: block;
        position: relative;
        width: .35rem;
        height: 2px;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        content: '';
        background: #f01414;
    }
    .title{
        padding: .48rem .4rem;
        margin-bottom: .16rem;
        background: #fff;
    }
    h1{
        margin-bottom: .32rem;
        font-size: .32rem;
        font-weight: 400;
    }
    p{
        font-size: .28rem;
        color: #71777d;
        line-height: .48rem;
    }
    .detail-downarrow{
        width: .2rem;
        height: .2rem;
        margin: .16rem auto 0;
        background: url('../assets/downarrow@2x.png') no-repeat center/contain;
    }
    .question{
        padding: .4rem;
        margin-bottom: .16rem;
        background: #fff;
    }
    .question p{
        padding-left: .56rem;
    }
    .question li + li{
        margin-top: .4rem;
    }
</style>