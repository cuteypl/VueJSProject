<template>
    <ul class="course-ul">
        <router-link to="/detail"> <!-- router会默认转为a标签 -->
            <li class="course-li" v-for="(item,index) in course_arrList" v-bind:key="index"> <!-- v-bind:key="index 是添加索引的意思，数据少的时候可不要，但去除后，eslint检测会警告提示 -->
                <img v-bind:src="item.imgUrl">
                <div class="course-li-desc">
                    <h1>{{item.title}}</h1>
                    <p>{{item.msg}}</p>
                </div>
            </li>
         </router-link>
    </ul>
</template>
<script>
    export default {
        props:{
            course_arrList: Array
        }
    }
</script>
<style scoped>
    .course-ul{
        display: flex;
        width: 100%;
        padding: .48rem .4rem;
        margin-bottom: 1rem;
        flex-direction: column;
        justify-content: center;
        overflow: hidden;
    }
    .course-li{
        display: flex;
    }
    .course-li + .course-li{
        margin-top: .4rem;
    }
    .course-li img{
        width: 2.16rem;
        height: 1.44rem;
        margin-right: .32rem;
    }
    .course-li-desc h1{
        margin-bottom: .16rem;
        font-size: .3rem;
        font-weight: 500;
    }
    .course-li-desc p{
        font-size: .24rem;
         color: #71777d;
    }
</style>