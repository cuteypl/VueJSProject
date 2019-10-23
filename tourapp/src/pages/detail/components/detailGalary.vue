<template>
    <div class="detailGalary">
        <ly-tab class="tabColor" v-model="selectedId" :items="items" :options="options" @change="handleClick"></ly-tab>
        <div class="cate"><span>全部</span><span>其他</span></div>
        <component :is="type" :imgList="imgList"></component>
    </div>
</template>

<script>
import galaryContent from './galaryContent'
export default {
    name: 'detailGalary',
    components:{
        galaryContent
    },
    props: {
        galaryList: Array,
        imgList: Array
    },
    data() {
        return {
            type:'galaryContent',
            selectedId: 0,
            items: [],
            options: {
                activeColor: '#0bc071'
            },
        }
    },
    computed: {
        loopGalaryList(){
            //循环GalaryList数组，添加label:构造items数组，以便渲染成导航条
            for(let i=0;i<this.galaryList.length;i++){
                let item = {label:this.galaryList[i]}
                this.items.push(item)
            }
        }
    },
    methods:{
        handleClick(item,index){
            //ly-tap固有的change事件，默认有item，index参数
            // console.log(index)  
            this.$store.state.index = index;
        }
    },
    mounted() {
        this.loopGalaryList;
    }
}
</script>
<style scoped>
    .detailGalary{ 
        position:absolute;
        top:.88rem;
        left:0;
        right:0;
        bottom:0;
        color:#fff;
        z-index:100;
        background:#fff;
    }
    .detailGalary >>> a.ly-tab-item{
        color:#000;
    }
    .detailGalary >>> .ly-tabbar{
        height: 40px;
        border-color:#fff;
        border-top: 1px solid #e4e4e4;
        border-bottom: 1px solid #e4e4e4;
        box-shadow: none;
    }
    /* .detailGalary >>> .ly-tab-active-barr{
        transition:all 300ms ease 0s;
        width: 100%;
        height: 2px;
        background: #0bc071;
        transform: translate3d()
    } */
    .cate{
        background:#edf0f5;
        line-height:.6rem;
        color:#000;
    }
    .cate > span{
        margin-left:.22rem;
        font-size:.3rem;
    }
    .wrapper{
        background:#fff;
    }
    .imgWrapper{
        width:47%;
        background:red;
        margin:.12rem;
        float:left;
    }
    .imgWrapper > img{
        width:100%;
    }
</style>