function themeStyle() {
  let themeName = localStorage.getItem("theme");
  const theme_light = document.getElementById("theme_light");
  const theme_dark = document.getElementById("theme_dark");
  switch (themeName) {
    case "theme-light.css":
      theme_light.classList.add("btn_click");
      theme_dark.classList.remove("btn_click");
      break;
    case "theme-dark.css":
      theme_light.classList.remove("btn_click");
      theme_dark.classList.add("btn_click");
      break;
    default:
      break;
  }
}

themeStyle();

// 切换主题
function switchTheme(themeName) {
  document.getElementById("theme").setAttribute("href", themeName);
  localStorage.setItem("theme", themeName); // 保存用户选择
  themeStyle();
}

// 页面加载时应用用户选择的主题
window.onload = function () {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.getElementById("theme").setAttribute("href", savedTheme);
  }
};
