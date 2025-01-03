document.getElementById("showPageBtn").addEventListener("click", function () {
  var slidePage = document.getElementById("slidePage");
  slidePage.classList.add("show"); // 显示页面
  // 隐藏主页面的滚动条
  document.documentElement.style.overflow = "hidden";
});

document.getElementById("closePageBtn").addEventListener("click", function () {
  var slidePage = document.getElementById("slidePage");
  slidePage.classList.remove("show"); // 隐藏页面
  // 移除隐藏主页面的滚动条
  document.documentElement.style.overflow = "";
});
