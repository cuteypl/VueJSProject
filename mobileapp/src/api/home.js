import axios from 'axios';
import jsonp from 'assets/js/jsonp';
import {SUCC_CODE, TIMEOUT, HOME_POSTLIST_PSIZE, jsonpOptions} from './config';

const shuffle = (arr) => { // 打乱数组的顺序
    const arrLength = arr.length;
    let i = arrLength;
    let rndNum;
    while (i--) {
      if (i !== (rndNum = Math.floor(Math.random() * arrLength))) {
        [arr[i], arr[rndNum]] = [arr[rndNum], arr[i]];
      }
    }
    return arr;
  };

export const getHomeSlider = () => { // 获取轮播图数据---axios
    return axios.get('http://www.imooc.com/api/home/slider', { timeout: TIMEOUT })
            .then(res => {
            if (res.data.code === SUCC_CODE) {
                let slidersArr = res.data.slider;
                const slider = [slidersArr[Math.floor(Math.random() * slidersArr.length)]]; // 随机获取数组中的某一个
                slidersArr = shuffle(slidersArr.filter(() => Math.random() >= 0.5)); // 过滤数组，即按50%的概率筛选数组的数据组成新的数组
                if (slidersArr.length === 0) {
                    slidersArr = slider;
                }
                console.log(slidersArr);
                return slidersArr;
            }
            throw new Error('没有成功获取到数据！');
            })
            .catch(err => {
                if (err) {
                    console.log(err);
                }
                return [{
                    linkUrl: 'https://www.imooc.com',
                    picUrl: require('assets/images/404.png')
                }];
            })
            .then(res => {
                return new Promise(resolve => { setTimeout(() => { resolve(res); }, 1000); }); // 模拟加载数据延迟1s，1s后才显示轮播图，延迟的这1s显示loading
            });
};

export const getHomePostlist = (page = 1, psize = HOME_POSTLIST_PSIZE) => {
    const url = 'https://ju.taobao.com/json/tg/ajaxGetItemsV2.json';
    const data = {
        page,
        psize,
        type: 0,
        frontCatId: ''
    };
    return jsonp(url, data, jsonpOptions)
    .then(res => {
        console.log(res);
        if (res.code === '200') { return res; }
        throw new Error('没有成功获取到数据！');
    })
    .catch(err => {
        if (err) { console.log(err); }
    })
    .then(res => {
        return new Promise(resolve => { setTimeout(() => { resolve(res); }, 1000); });
    });
};
