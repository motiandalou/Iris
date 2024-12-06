// 禁止滚动
function noScroll() {
  // overflow: hidden
  document.body.classList.add("no-scroll");
}

// 可以滚动
function scroll() {
  // 移除禁止滚动的类--pc
  document.body.classList.remove("no-scroll");
}
