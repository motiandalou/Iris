// 轮播
let slideIndex = 0;

function showSlides(slides, now = 0) {
  let i;

  // 默认全部隐藏
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  if (now) {
    slides[now - 1].style.display = "flex";
  } else {
    slides[0].style.display = "flex";
  }

  // onclick = 'showSlides(document.querySelectorAll("#dialog-EngTUTOR .slide"),4)';
}

// 切换--上一页 / 下一页
function moveSlide(n, id) {
  slideIndex += n;
  let slides = document.querySelectorAll(`#${id} .slide`);

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "flex";
}
