<template>
    <div class="home-page">
        <v-header></v-header>
        <div class="nav">
            <ul class="nav-ul">
                <li v-for="(item,index) in nav_arrList" v-bind:key="index"> <!-- v-bind:key="index 是添加索引的意思，数据少的时候可不要，但去除后，eslint检测会警告提示 -->
                    <img v-bind:src="item.imgUrl">
                    <p>{{item.name}}</p>
                </li>
            </ul>
        </div>
        <v-course v-bind:course_arrList="course_Array"></v-course>
        <v-footer></v-footer>
    </div>
</template>

<script>
    import header from "@/components/header/" //header组件

    import webImg from "@/assets/web.png"  //nav的图片
    import webService from "@/assets/webservice.png"
    import move from "@/assets/move.png"
    import data from "@/assets/data.png"
    import bigdata from "@/assets/bigdata.png"

    import course from "@/components/course/" //course组件
    import course1 from "@/assets/course1.jpg" //course的图片
    import course2 from "@/assets/course2.jpg"
    import course3 from "@/assets/course3.jpg"
    import course4 from "@/assets/course4.jpg"
    import course5 from "@/assets/course5.jpg"

    import footer from "@/components/footer/" //footer组件
    
    export default{
        data(){
            return{
                nav_arrList: [],
                course_Array:[]
            }
        },
        mounted(){
            this.nav_arrList = [{
                imgUrl: webImg,
                name: '前端开发'
            },{
                imgUrl: webService,
                name: '后端开发'
            },{
                imgUrl: move,
                name: '移动开发'
            },{
                imgUrl: data,
                name: '数据库'
            },{
                imgUrl: bigdata,
                name: '云计算'
            }],
            this.course_Array = [{
                imgUrl: course1,
                title: ' 实例妙解Sed和Awk的秘密',
                msg:'中级 · 330人在学'
            },{
                imgUrl: course2,
                title: ' 实例妙解Sed和Awk的秘密',
                msg:'中级 · 330人在学'
            },{
                imgUrl: course3,
                title: ' 实例妙解Sed和Awk的秘密',
                msg:'中级 · 330人在学'
            },{
                imgUrl: course4,
                title: ' 实例妙解Sed和Awk的秘密',
                msg:'中级 · 330人在学'
            },{
                imgUrl: course5,
                title: ' 实例妙解Sed和Awk的秘密',
                msg:'中级 · 330人在学'
            },{
                imgUrl: course1,
                title: ' 实例妙解Sed和Awk的秘密',
                msg:'中级 · 330人在学'
            },{
                imgUrl: course2,
                title: ' 实例妙解Sed和Awk的秘密',
                msg:'中级 · 330人在学'
            }]
        },
        components:{
            'v-header': header,
            'v-course': course,
            'v-footer': footer
        }
    }
</script>
<style scoped>
    .nav{
        width: 100%;
        overflow-x: scroll;
    }
    .nav-ul{
        display: flex;
        height: 2rem;
        width: 125%;
        margin-top: .88rem;
        background: #f3f5f7;
        align-items: center;
        justify-content: space-around;
        text-align: center;
        font-size: .28rem;
        flex-wrap: nowrap;
    }
    .nav li{
        width: 25%;
    }
    .nav img{
        width: .64rem;
        height: .64rem;
    }
</style>
   