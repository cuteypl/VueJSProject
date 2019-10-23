export const SUCC_CODE = 0; // home.js中的getHomeSlider的参数，即获取数据成功与否的标准
export const TIMEOUT = 10000; // 获取数据超时时间设定，超过10秒还没获取到则抛出错误
export const HOME_POSTLIST_PSIZE = 20; // home.js中的getPostlist的参数，即每页加载多少条数据
export const jsonpOptions = { // jsonp API的默认参数
    param: 'callback',
    timeout: TIMEOUT
};
