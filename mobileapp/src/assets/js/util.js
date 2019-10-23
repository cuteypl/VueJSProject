// 节流函数,主要用于分类页面，当快速点击选项时 category.js中使用
export const debounce = (func, delay = 200) => {
    let timer = null;
    return function (...args) {
      timer && clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };
