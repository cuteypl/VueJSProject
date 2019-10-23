<template>
    <div class="home">
        <home-header class="home-header"></home-header>
        <home-swiper :swiperList="swiperList"></home-swiper>
        <home-catalog :catalogList="catalogList"></home-catalog>
        <home-hot 
            :hotPriseList="hotPriseList"
            :hotTrendList="hotTrendList"
            :hotContentList="hotContentList"
        ></home-hot>
        <home-weekend :weekendList="weekendList"></home-weekend>
        <home-guess :guessList="guessList"></home-guess>
    </div>
</template>

<script>
import axios from 'axios'
import homeHeader from './components/homeHeader'
import homeSwiper from './components/homeSwiper'
import homeCatalog from './components/homeCatalog'
import homeHot from './components/homeHot'
import homeWeekend from './components/homeWeekend'
import homeGuess from './components/homeGuess'
export default {
    name: 'Home',
    components: {
        homeHeader,
        homeSwiper,
        homeCatalog,
        homeHot,
        homeWeekend,
        homeGuess
    },
    data() {
        return {
            guessList:[],
            hotPriseList:[],
            hotTrendList:[],
            hotContentList:[],
            catalogList:[],
            swiperList:[],
            weekendList:[]
        }
    },
    methods: {
        getHomeData(){
            axios.get("./api/index.json")
                .then(this.getHomeDataSucc);
        },
        getHomeDataSucc(res){
            res = res.data;
            // console.log(res);
            if(res.data){
                const data = res.data
                this.guessList = data.guessList
                this.hotPriseList = data.hotPriseList
                this.hotTrendList = data.hotTrendList
                this.hotContentList = data.hotContentList
                this.catalogList = data.catalogList
                this.swiperList = data.swiperList
                this.weekendList = data.weekendList
            }
        }
    },
    mounted() {
        this.getHomeData();
    }
}
</script>
<style scoped>
    .home{
        position: relative;
    }
    .home-header{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 100;
    }
</style>