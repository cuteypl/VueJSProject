<template>
    <div class="locationAlphabet">
        <ul class="alphR-list">
            <li class="alphR-item" 
                v-for="item of alphabetList" :key="item.id"
                @click="handleLetterClick"
            >{{item.content}}</li>
        </ul>
        <div class="alphR-note" ref="noteTips">{{this.content}}</div>
    </div>
</template>

<script>
export default {
    name: 'locationAlphabet',
    props: {
        alphabetList: Array
    },
    data() {
        return {
            content: ' '
        }
    },
    methods: {
        handleLetterClick(e){
            this.content = e.target.innerText;
            console.log(this.content);
            this.$emit("change",this.content);//将选中的字母传送到父组件，再由父组件传给content组件，以便实现跳转到相应的地方
            for(let i=0,len=this.alphabetList.length; i<len; i++){
                if(this.content === this.alphabetList[i].content){
                    let distance = 1.3 + (i*0.35);
                    const showElement = this.$refs.noteTips;
                    showElement.style="display:block;top:"+distance+"rem";
                    setTimeout(function () {
                        showElement.style="display:none";
                    },500)
                }
            }
        }
    },
}
</script>
<style scoped>
    .alphR-list{
        position: fixed;
        top: 1.15rem;
        right: 0;
        padding: 5px 2px;
        margin-top: 10px;
        background: #eff1f5;
        text-align: center;
        color: #23aebe;
        opacity: .7;
        z-index: 100;
    }
    .alphR-item{
        font-size: 10px;
        line-height: 18px;
    }
    .alphR-note{
        display: none;
        position: absolute;
        top: 1.65rem;/*两个li之间的距离是.35rem*/
        right: 1rem;
        padding: 8px;
        text-align: center;
        background: rgba(80,180,0,.7);
        color: #fff;
        z-index: 100;
        border-radius: 3px;
    }
    .alphR-note::after{
        display: block;
        position: absolute;
        content: '';
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        width: 0;
        height: 0;
        border-left: 8px solid rgba(80,180,0,.7);
        border-right: none;
        border-top: 3px solid transparent;
        border-bottom: 3px solid transparent;
        transform: translateX(100%);
    }
</style>