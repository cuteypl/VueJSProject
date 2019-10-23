<template>
    <div class="location">
        <div class="load" v-if="loading">loading...</div>
        <location-header :cities="cities"></location-header>
        <location-content :letter="letter" :cities="cities" :hotCities="hotCities"></location-content>
        <location-alphabet :alphabetList="alphabetList" @change="handleLetterChange"></location-alphabet>
    </div>
</template>

<script>
import axios from 'axios'
import locationHeader from './components/locationHeader'
import locationContent from './components/locationContent'
import locationAlphabet from './components/locationAlphabet'
export default {
    name: 'Laction',
    components: {
        locationHeader,
        locationContent,
        locationAlphabet
    },
    data() {
        return {
            letter: '',
            cities: {}, //按字母排序的cities
            hotCities: [],
            alphabetList: [], //字母集
            loading: true
        }
    },
    watch: {  },
    computed: {  },
    methods: {
        getLocationData(){
            axios.get("./api/city.json")
                .then(this.getLocationDataSucc);
        },
        getLocationDataSucc(res){
            res = res.data;
            if(res.data){
                this.loading = false;
                const data = res.data;
                this.cities = data.cities;
                this.hotCities = data.hotCities;
                this.alphabetList = data.alphabetList;
            }
        },
        handleLetterChange(letter){
            this.letter = letter;
        }
    },
    created() {  },
    mounted() {
        this.getLocationData();
    }
}
</script>
<style scoped>
    .load{
        position: absolute;
        top: 7rem;
        left: 3.5rem;
        width: 1.8rem;
        height: .5rem;
        background: #000;
        opacity: .3;
        color: #fff;
        text-align: center;
        z-index: 111;
    }
</style>