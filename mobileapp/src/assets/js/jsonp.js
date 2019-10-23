// 对jsonp进行封装，对传入的参数进行进一步整理，不采用回调，改为采用promise
import jsonp from 'jsonp';

// {
//   page: 1,
//   psize: 20
// }
// page=1&psize=20

const parseParam = (param) => {
    let params = [];
    for (const key in param) {
        params.push([key, encodeURIComponent(param[key])]);
    }
    // [[page, 1], [psize, 20]]
    return params.map(value => value.join('=')).join('&');
    // [[page, 1], [pszie, 20]]
    // [page=1, psize=20]
    // page=1&psize=20
};

export default (url, data, options) => {
    url += (url.indexOf('?') < 0 ? '?' : '&') + parseParam(data);
    console.log(url); // https://ju.taobao.com/json/tg/ajaxGetItemsV2.json?page=1&psize=20&type=0&frontCatId=
    return new Promise((resolve, reject) => {
        jsonp(url, options, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};
