// 禁止滚动
function noScroll() {
  // pc(no-scroll: overflow: hidden;)
  document.body.classList.add("no-scroll");
  // mobile
  window.addEventListener(
    "touchmove",
    function (e) {
      e.preventDefault();
    },
    { passive: false }
  );
}
