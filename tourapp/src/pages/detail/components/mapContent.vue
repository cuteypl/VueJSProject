<template>
    <div class="mapContent">
        <div class="iconfont goBack" @click="goBack">&#xe641;</div>
        <div class="allmap" ref="allmap"></div>
        <div class="tab">
            <div class="arrow iconfont" @click="handleArrowClick">&#xe641;</div>
            <navbar v-model="selected">
                <tab-item id="0">酒店</tab-item>
                <tab-item id="1">景点</tab-item>
            </navbar>
            <tab-container v-model="selected">
                <!-- <tab-container-item v-for="(item,index) of addressList" :key="index" :id="index">
                    <cell v-for="innerItem of addressList[index]" :title="innerItem.title" :label="innerItem.label" :key="innerItem.id" @click.native="handleCellClick(index,innerItem.id)"/>
                </tab-container-item> -->
                <tab-container-item id="0">
                    <cell v-for="item of addressList[0]" :title="item.title" :label="item.label" :key="item.id" @click.native="handleCellClick(0,item.id)"/>
                </tab-container-item>
                <tab-container-item id="1">
                    <cell v-for="item of addressList[1]" :title="item.title" :label="item.label" :key="item.id" @click.native="handleCellClick(1,item.id)"/>
                </tab-container-item>  
            </tab-container>
        </div>
    </div>
</template>

<script>
import { Navbar, TabItem, TabContainer, TabContainerItem, Cell} from 'mint-ui'
import markerImg from '../../../assets/images/location.png'
export default {
    name: 'mapContent',
    components: {
        Navbar, 
        TabItem,
        TabContainer,
        TabContainerItem,
        Cell
    },
    props: {
        addressList:Array
    },
    data() {
        return {
            clickFlag:'0',
            selected:'0'
            // indexI: '0'
        }
    },
    watch: {
        //判断点击的到底是左边还是右边
        // selected(val){
        //     if(val==='1'){
        //         this.indexI='1';
        //     }else{
        //         this.indexI='0';
        //     }
        // }
    },
    methods: {
        goBack(){
            this.$router.go(-1);
        },
        /* 箭头点击事件 */
        handleArrowClick(){
            if(this.clickFlag==='0'){
                this.$refs.allmap.style.height='20%'; //显示地图的那一部分高度为20%
                this.clickFlag='1';
            }else{
                this.$refs.allmap.style.height='60%'; //显示地图的那一部分高度为60%
                this.clickFlag='0';
            }
        },
        /* 添加地点标注 */
        addMasker(m,n){
            // debugger;
            let map = new BMap.Map(this.$refs.allmap);
            let myGeo = new BMap.Geocoder();
            for(let i=0;i<this.addressList.length;i++){
                for(let j=0;j<this.addressList[i].length;j++){
                    let title = this.addressList[m][n];
                    myGeo.getPoint(this.addressList[i][j].title,function(point){
                        // console.log(point)
                        if(point){
                            if(i===m&&j===n){
                                //添加图片标注
                                map.centerAndZoom(point,15);
                                let myIcon = new BMap.Icon(markerImg,new BMap.Size(50,50),{
                                    imageOffset:new BMap.Size(0,0)
                                    // offset: new BMap.Size(12, 20), // 指定定位位置
                                    // imageOffset: new BMap.Size(1, 0 - 10 * 25) // 设置图片偏移
                                })
                                let marker = new BMap.Marker(point,{icon:myIcon});
                                map.addOverlay(marker);
                                //添加信息窗口
                                // console.log(title)
                                let infoWindow = new BMap.InfoWindow(title.title);
                                infoWindow.setWidth(250);
                                infoWindow.setHeight(60);
                                map.openInfoWindow(infoWindow,map.getCenter());
                        }else{
                            //添加默认标注
                            map.centerAndZoom(point,15);
                            let marker = new BMap.Marker(point);
                            map.addOverlay(marker);
                        }
                    }else{
                        console.log('对不起，找不到');
                    }
                })
                }
            }
        },
        handleCellClick(indexI,indexJ){
            // let indexI = this.indexI;
            this.addMasker(parseInt(indexI),parseInt(indexJ));
        }
    },
    mounted() {
        this.addMasker(0,0);
    }
}
</script>
<style scoped>
    .mapContent{
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background:#fff;
        z-index:100;
    }
    .goBack{
        position: absolute;
        top: 15px;
        left: 10px;
        padding: 6px;
        font-size: 24px;
        color: #fff;
        background: rgba(0, 0, 0, .3);
        border-radius: 50%;
        z-index: 111;
    }
    .allmap{
        position:relative;
        top:0;
        left:0;
        right:0;
        bottom:.6rem;
        z-index:11111;
        height:60%;
    }
    .tab{
        padding-top: 10px;
        color:#000;
    }
    .arrow{
        width: 20px;
        height: 10px;
        margin: 0 auto;
        text-align:center;
        color: #666;
        transform: rotate(-90deg);
        cursor: pointer;
    }
    .mapContent >>> .mint-tab-item-label{
        color: #333;
        font-size: 16px;
    }
    .mapContent >>> .is-selected>.mint-tab-item-label{
        color: #23beae;
    }
</style>