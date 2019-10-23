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

export const navtapItems = [ // navtap的数据
    {
      linkUrl: 'https://www.imooc.com',
      picUrl: require('./images/nav-item-1.png'),
      text: '团购'
    },
    {
      linkUrl: 'https://www.imooc.com',
      picUrl: require('./images/nav-item-2.png'),
      text: '一元购'
    },
    {
      linkUrl: 'https://www.imooc.com',
      picUrl: require('./images/nav-item-3.png'),
      text: '优惠券'
    },
    {
      linkUrl: 'https://www.imooc.com',
      picUrl: require('./images/nav-item-4.png'),
      text: '教育'
    },
    {
      linkUrl: 'https://www.imooc.com',
      picUrl: require('./images/nav-item-5.png'),
      text: '旅行'
    },
    {
      linkUrl: 'https://www.imooc.com',
      picUrl: require('./images/nav-item-6.png'),
      text: '在线订餐'
    },
    {
      linkUrl: 'https://www.imooc.com',
      picUrl: require('./images/nav-item-7.png'),
      text: '庆典'
    },
    {
      linkUrl: 'https://www.imooc.com',
      picUrl: require('./images/nav-item-8.png'),
      text: '秒杀'
    },
    {
      linkUrl: 'https://www.imooc.com',
      picUrl: require('./images/nav-item-9.png'),
      text: '拍卖'
    },
    {
      linkUrl: 'https://www.imooc.com',
      picUrl: require('./images/nav-item-10.png'),
      text: '服务'
    }
];
