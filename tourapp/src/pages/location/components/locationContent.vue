<template>
    <div class="locationContent" ref="wrapper">
        <div> <!-- 此div是为了滚动条，better-scroll的使用是在.wrapper后,还有一个内包裹的容器 -->
            <div class="present-area">
                <h3 class="title" ref="present">当前</h3>
                <p class="present-item" @click="handlePresentItemClick">{{this.city}}</p>
            </div>
            <div class="hot-area">
                <h3 class="title" ref="hot">热门城市</h3>
                <ul class="hot-list">
                    <li class="hot-item" v-for="item of hotCities" :key="item.id" @click="handleCityItemClick(item.name)">{{item.name}}</li>
                </ul>
            </div>
            <div class="alph-area">
                <div class="alph-wrapper" v-for="(item,key) of cities" :key="key" :ref="key">
                    <h3 class="title">{{key}}</h3>
                    <ul class="alph-list">
                        <li class="item alph-item" v-for="innerItem of item" :key="innerItem.id" @click="handleCityItemClick(innerItem.name)">{{innerItem.name}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import BMap from 'BMap'
export default {
    name: 'locationContent',
    props: {
        letter: String,
        cities: Object,
        hotCities: Array
    },
    data() {
        return {
            city: ''
        }
    },
    watch: {
        letter(){
            const elementLetter = this.$refs[this.letter];
            const elementPresent = this.$refs.present;
            if(elementLetter){
                this.scroll.scrollToElement(elementLetter[0]);
            }else{
                this.scroll.scrollToElement(elementPresent);
            }
        }
    },
    methods: {
        handlePresentItemClick(){
            this.$router.push('/');
        },
        handleCityItemClick(city){
            this.$store.dispatch('changeCity',city);
            this.$router.push('/');
        }
    },
    mounted() {
        this.scroll = new BScroll(this.$refs.wrapper,{
            click:true,
            mouseWheel:{
                speed:20,
                invert:false,
                easeTime:300}
        })
        let map = new BMap.Map('allmap');
        let myCity = new BMap.LocalCity();
        myCity.get((result)=>{
            if(result){
                this.city = result.name;
            }else{
                this.city = '正在获取位置信息';
            }
        })
    }
}
</script>
<style scoped>
    .locationContent{
        position: absolute;
        top: 1.12rem;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        padding-top: 8px;
        background: #e9ecf1;
        z-index: 1;
        overflow: hidden;
    }
    .title{
        width: 100%;
        height: 33px;
        padding-left: 20px;
        line-height: 33px;
        color: #666;
        font-weight: 400;
        font-size: .24rem;
    }
    .present-item{
        width: 90%;
        height:44px;
        padding: 0 8px;
        margin: 0 auto;
        border-radius: 3px;
        border: none;
        box-sizing: border-box;
        background: #fff;
        line-height: 44px;
        border: 1px solid #ddd;
    }
    .hot-list{
        display: flex;
        padding: 0 20px;
        justify-content: start;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        align-content: space-around;
    }
    .hot-item{
        height: 32px;
        padding: 0 20px;
        margin-right: 8px;
        margin-bottom: 10px;
        background: #fff;
        line-height: 30px;
        box-sizing: border-box;
        border: 1px solid #ddd;
        border-radius: 3px;
    }
    .alph-list{
        padding: 0 20px;
        background: #fff;
    }
    .alph-item{
        width: 100%;
        height: 44px;
        line-height: 44px;
        border-bottom: 1px solid #ddd;
    }
</style>