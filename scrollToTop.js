// 滚动到顶部的函数
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// 监听滚动事件
window.addEventListener("scroll", () => {
  const scrollButton = document.getElementById("scrollToTopBtn");
  // 当页面滚动 320px 时显示按钮，否则隐藏
  if (window.scrollY >= 320) {
    scrollButton.style.display = "inline";
  } else {
    scrollButton.style.display = "none";
  }
});
