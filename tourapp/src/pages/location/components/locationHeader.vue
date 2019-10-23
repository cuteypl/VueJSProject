<template>
    <div class="locationHeader">
        <div class="search">
            <span class="iconfont">&#xe688;</span>
            <input class="search-input needsclick" type="text" placeholder="请输入城市名（如北京、bj、beijing）" v-model="keyword" :class="[changeSearchInput]">
            <span class="clear" :class="[changeClear]" @click="xClear">X</span>
            <button class="cancle" :class="[changeCancle]" @click="cancleBtn">取消</button>
        </div>
        <div class="search-result" v-show="this.list.length" ref="resultWrapper">
            <ul>
                <li class="search-first">{{this.show}}</li>
                <li class="search-item" v-for="item of this.list" :key="item.id" @click="handleResultItemClick(item.name)">{{item.name}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import BScroll from "better-scroll" 
import {disreslove} from '../../../utils/utils.js'
export default {
    name: 'locationHeader',
    props: {
        cities: Object
    },
    data() {
        return {
            show: '请输入城市名（如北京、beijing）',
            keyword: '',
            flag: '1',
            changeSearchInput: '',
            changeClear: '',
            changeCancle: '',
            list: []
        }
    },
    watch: {
        keyword(){
            // debugger;
            this.addClass();
            let content = this.keyword.trim();
            if(content===''){
                //内容为空
                if(this.flag==='1'){ //flag=1，代表是刚进来的时候
                    this.removeBack(); //退出搜索结果页
                }else if(this.flag==='2'){ //flag=2，代表是点击了取消按钮
                    this.keyword = '';
                    this.removeBack(); //退出搜索结果页
                }else{ //flag=3，代表是点击了X按钮，点击过一次X按钮，往后输入内容自己鼠标手动清除内容，还是会停留在当前搜索结果页面
                    this.keyword = '';
                    this.changeClear = '';
                    this.show = '请输入城市名（如北京、beijing）';
                }
            }else if(/^[0-9]+$/.test(content)){
                //内容数字
                this.showError();
            }else if(/^[a-zA-Z]+$/.test(content)){
                //内容字母
                let result = [];
                const lowerContent = content.toLowerCase();
                for(let i in this.cities){
                    let haveAlph=i.toLowerCase().indexOf(lowerContent.substr(0,1))>-1;
                    if(haveAlph){
                        this.cities[i].forEach((value,key)=>{
                            if(value.spell.indexOf(lowerContent)>-1){
                                this.show=this.keyword+"（请输入如北京、beijing）";
                                result.push(value);
                                this.list = result;
                            }else if(lowerContent.indexOf(value.spell)>-1){
                                this.show="对不起，找不到："+this.keyword;
                            }
                            else{
                                if(!result.length){    
                                    this.show="对不起，找不到："+this.keyword+"（请输入如：北京、beijing）";
                                }
                            }
                        })
                        // console.log(this.list,result,lowerContent.substr(lowerContent.length-1,1));
                        break;
                    }else if(lowerContent.substr(0,1)==='u'||lowerContent.substr(0,1)==='i'||lowerContent.substr(0,1)==='v'||lowerContent.substr(0,1)==='o'){
                        this.show="对不起，找不到："+this.keyword
                        this.list=['']    
                    }
                }
            }else if(/^[\u4e00-\u9fa5]+$/.test(content)){
                //内容汉字
                let result = []
                for(let i in this.cities){
                    let haveAlph=i.toLowerCase().indexOf(disreslove(content.substr(0,1)).substr(0,1))>-1
                    if(haveAlph){
                        this.cities[i].forEach((value)=>{
                            if(value.name.indexOf(content)>-1){
                                this.show="请输入城市名（如北京、beijing）";
                                result.push(value);
                                this.list = result;
                            }else if(content.indexOf(value.name)>-1){
                                this.show="对不起，找不到："+this.keyword;
                            }else{
                                if(!result.length){
                                    this.show="对不起，找不到："+this.keyword;
                                }
                            }
                        })
                    }
                }
            }else{
                //其他字符，如特殊字符
                this.showError();
            }
            // console.log(this.list);
        }
    },
    methods: {
        xClear(){
            this.keyword = ' ';
            this.flag = '3';
        },
        cancleBtn(){
            this.keyword = ' ';
            this.flag = '2';
        },
        addClass(){
            this.changeSearchInput = "changeSearchInput";
            this.changeClear = "changeClear";
            this.changeCancle = "changeCancle";
        },
        removeClass(){
            this.changeSearchInput = "";
            this.changeClear = "";
            this.changeCancle = "";
        },
        removeBack(){
            this.list = [];
            this.show = '';
            this.removeClass();
        },
        showError(){
            this.list = [''];
            this.show="对不起，找不到："+this.keyword;
        },
        handleResultItemClick(){
            this.$router.push('/');
        }
    },
    mounted() {
        this.scroll = new BScroll(this.$refs.resultWrapper,{
            click:true,
            mouseWheel:{
                speed:20,
                invert:false,
                easeTime:300}
        })
    }
}
</script>
<style scoped>
    .search{
        position: relative;
        height: .72rem;
        padding: .2rem;
        background: #e0e4ec;
    }
    .iconfont{
        position: absolute;
        top: .45rem;
        left: .45rem;
        color: #666;
    }
    .search-input{
        width: 100%;
        height: .72rem;
        padding-left: .65rem;
        border-radius: .6rem;
        text-align: left;
        line-height: .72rem;
        box-sizing: border-box;
        caret-color: #000;
        cursor: text;
    }
    .changeSearchInput{
        width: 88%;
    }
    .clear{
        display: none;
        position:absolute;
        top:.32rem;
        right:1.3rem;
        width: 20px;
        height: 20px;
        border-radius:.2rem;
        background:#ccc;
        color:#fff;
        z-index:101;
        text-align: center;
        line-height: 22px;
    }
    .changeClear{
        display: block;
    }
    .cancle{
        display: none;
        position: absolute;
        top: .29rem;
        right: .22rem;
        background: transparent;
        color:#666;
        text-align: center;
        font-weight: bold;
        font-size: .35rem;
        z-index: 101;
    }
    .changeCancle{
        display: block;
    }
    .search-result{
        /* display: none; */
        position: absolute;
        top: 1.1rem;
        left: 0;
        right: 0;
        bottom: 0;
        background: #fff;
        overflow: hidden;
        z-index: 101;
    }
    .search-first{
        line-height: .22rem;
        padding: .2rem;
        border-bottom: 1px solid #ccc;
        background: #fff;
        font-size: .24rem;
        font-family: 'SimSun';
        color: #999;
    }
    .search-item{
        line-height: .82rem;
        padding-left: .2rem;
        margin-bottom: .06rem;
        border-bottom: 1px solid #ccc;
        background: #fff;
    }
</style>