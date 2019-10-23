<template>
    <div class="header" :class="[headerChange]">
        <div class="header-back" :class="[backChange]">
            <span class="iconfont">&#xe641;</span>
        </div>
        <div class="header-search" :class="[searchChange]">
            <span class="iconfont">&#xe688;</span>
            上海海昌海洋公园
        </div>
        <router-link to="/location">
            <div class="header-city" :class="[cityChange]">
                {{this.$store.state.city}}
                <span class="iconfont">&#xe65d;</span>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'homeHeader',
    // props: {
    //     city: String
    // },
    data() {
        return {
            headerChange: '',
            backChange: '',
            searchChange: '',
            cityChange: ''
        }
    },
    methods: {
        scrollChange(){
            let height = document.documentElement.scrollTop;
            if(height > 10){
                this.headerChange = 'headerChange';
                this.backChange = 'backChange';
                this.searchChange = 'searchChange';
                this.cityChange = 'cityChange';
            }else{
                this.headerChange = '';
                this.backChange = '';
                this.searchChange = '';
                this.cityChange = '';
            }
        }
    },
    mounted() {
        window.addEventListener('scroll',this.scrollChange);
    }
}
</script>
<style scoped>
    .header{
        display: flex;
        height: .88rem;
        justify-content: space-between;
        align-items: center;
        color: #999;
    }
    .header-back{
        width: .9rem;
        text-align: center;
    }
    .header-search{
        flex: 1;
        height: .6rem;
        margin: .2rem;
        border-radius: .5rem;
        box-shadow: 0 0 .01rem .02rem #ccc;
        text-align: center;
        line-height: .6rem;
    }
    .header-city{
        width: 1.4rem;
        text-align: center;
    }

    .headerChange{
        background: #fff;
    }
    .backChange{
        color: #333;
    }
    .searchChange{
        background: #eee;
        box-shadow: none;
    }
    .cityChange{
        color: #333;
    }
</style>