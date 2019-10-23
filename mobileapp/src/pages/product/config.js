export const swiperOptions = {
    direction: 'horizontal',
    loop: true,
    interval: 3000, // 自动播放时间，为0则不自动播放
    pagination: true
};

export const loadingOptions = {
    indicator: 'on', // 是否显示loading图标 on-显示 off-不显示
    text: '加载中...', // 要显示的字体
    inline: false // loading图片和字是否显示在一行
};

export const scrollOptions = {
    scrollbar: true // 是否显示滚动条
};

export const HEADER_TRANSITION_HEIGHT = 100; // 滚动条滚动超过该距离时头部导航条进行背景色渐变

const prefix = 'mall-product'; // 本地缓存中的键值
const suffix = 'key';
export const PRODUCT_CONTENT_KEYWORD_KEY = `${prefix}-CONTENT-keyword-${suffix}`;
