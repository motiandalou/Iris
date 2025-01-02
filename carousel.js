// 轮播
let slideIndex = 0;
// 点击哪一页,在这页上面继续进行操作
let nowIndex = 0;

function showSlides(slides, now) {
  // 隐藏主页面的滚动条
  document.documentElement.style.overflow = "hidden";

  let i;
  nowIndex = now;
  // 默认全部隐藏
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  if (nowIndex) {
    slides[nowIndex - 1].style.display = "flex";
  } else {
    slides[0].style.display = "flex";
  }
}

// 切换--上一页 / 下一页
function moveSlide(n, id) {
  nowIndex += n;
  let slides = document.querySelectorAll(`#${id} .slide`);

  if (nowIndex > slides.length) {
    nowIndex = 1;
  }
  if (nowIndex < 1) {
    nowIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[nowIndex - 1].style.display = "flex";
}
