<template>
    <div class="guess">
        <div class="guess-desc" :class="[guessDescChange]">
            <span class="active">猜你喜欢</span>
            <span>热门活动</span>
        </div>
        <router-link class="guess-item" v-for="item of guessList" :key="item.id" :to='"/detail/"+item.id'>
            <div class="item-wrapper">
                <div class="item-img">
                    <img class="item-img" :src="item.imgUrl" alt="图片">
                    <p class="item-crite">{{item.crite}}</p>
                </div>
                <h2 class="item-desc">{{item.desc}}</h2>
                <div class="item-info">
                    <p class="info-distance">酒店距景点{{item.distance}}km</p>
                    <p class="info-prise"><em>￥</em><span>{{item.prise}}</span>起</p>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'homeGuess',
    props: {
            guessList: Array
    },
    data() {
        return {
            guessDescChange: ''
        }
    },
    methods: {
        scrollChange(){
            let height = document.documentElement.scrollTop;
            if(height > 600){
                this.guessDescChange = 'guessDescChange';
            }else{
                this.guessDescChange = '';
            }
        }
    },
    mounted() {
        window.addEventListener('scroll',this.scrollChange);
    }
}
</script>
<style scoped>
.guess-desc{
    display: flex;
    height: 40px;
    padding: 0 15px;
    margin-bottom: 15px;
    border-bottom: 1px solid #ddd;
    justify-content: space-between;
    align-content: center;
}
.guess-desc > span{
    flex: 1;
    text-align: center;
    font-size: 0.3rem;
    line-height: 40px;
}
.guess-desc .active{
    color: #23beae;
}
.guess-desc .active::after{
    position: relative;
    display: block;
    content: '';
    width: 100%;
    height: 3px;
    top: -2px;
    left: 0;
    background: #23beae;
}
.guess-item{
    display: block;
    padding: 0 15px;
    margin-bottom: 15px;
}
.item-img{
    position: relative;
    width: 100%;
    height: 188px;
}
.item-crite{
    position: absolute;
    width: 100%;
    height: 29px;
    bottom: 0;
    left: 0;
    line-height: 29px;
    font-size: 12px;
    color: #fff;
    background: rgba(0,0,0,.2);
    text-indent: 10px;
}
.item-desc{
    margin-top: 5px;
    font-size: 15px;
    font-weight: 700;
    color: #333;
    line-height: 1.5;
}
.item-info{
    display: flex;
    height: 30px;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    color: #999;
}
.info-prise > em{
    font-size: 15px;
    color: red;
}
.info-prise > span{
    color: red;
    font-size: 20px;
    font-weight: 700;
}

.guessDescChange{
    position: fixed;
    top: .88rem;
    left: 0;
    width: 100%;
    background: #fff;
    z-index: 100; /*和header的层级一样*/
}
</style>