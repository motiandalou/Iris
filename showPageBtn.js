document.getElementById("showPageBtn").addEventListener("click", function () {
  var slidePage = document.getElementById("slidePage");
  var navbar = document.getElementById("navbar");
  slidePage.classList.add("show"); // 显示页面
  navbar.classList.add("navbar-black"); // 改变导航栏颜色
});

document.getElementById("closePageBtn").addEventListener("click", function () {
  var slidePage = document.getElementById("slidePage");
  var navbar = document.getElementById("navbar");
  slidePage.classList.remove("show"); // 隐藏页面
  navbar.classList.remove("navbar-black"); // 恢复导航栏颜色
});
