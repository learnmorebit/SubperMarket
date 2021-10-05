

//对某个函数进行节流操作
export function debounce(fun, delay = 50) {
  let timer = null
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fun.apply(this, args)
    }, delay);
  }

}
