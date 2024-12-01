document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");
  let didScroll = false;

  window.addEventListener("scroll", function () {
    if (didScroll) return;
    didScroll = true;
    setTimeout(function () {
      if (window.pageYOffset > 320) {
        // 320spx is the offset before the navbar sticks
        navbar.style.position = "fixed";
        navbar.style.top = "0";
      } else {
        navbar.style.position = "relative";
        navbar.style.top = "";
      }
      didScroll = false;
    }, 10);
  });
});
