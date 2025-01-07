// 切换语言样式变化
function langChang() {
  const language_zh = document.getElementById("language_zh");
  const language_en = document.getElementById("language_en");
  const language_tc = document.getElementById("language_tc");

  switch (localStorage.getItem("language")) {
    case "zh":
      language_zh.classList.add("btn_click");
      language_en.classList.remove("btn_click");
      language_tc.classList.remove("btn_click");
      break;
    case "en":
      language_zh.classList.remove("btn_click");
      language_en.classList.add("btn_click");
      language_tc.classList.remove("btn_click");
      break;
    case "tc":
      language_zh.classList.remove("btn_click");
      language_en.classList.remove("btn_click");
      language_tc.classList.add("btn_click");
      break;

    default:
      break;
  }
}
langChang();

const togglePopupButton = document.getElementById("togglePopup");
const popup = document.getElementById("moreFuncPop");

togglePopupButton.addEventListener("click", () => {
  popup.classList.toggle("active");
});

document.addEventListener("click", (event) => {
  if (!popup.contains(event.target) && event.target !== togglePopupButton) {
    popup.classList.remove("active");
  }
});
