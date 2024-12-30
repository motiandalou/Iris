const popup = document.getElementById("modal-content");
// 显示模态对话框并设置内容
function showModal(content) {
  if (!content) return;
  // 动态设置内容
  document.getElementById("modal-body").innerHTML = content;
  document.getElementById("modal-overlay").style.display = "block";
  popup.style.display = "block";
  popup.style.opacity = 1;

  setTimeout(() => {
    popup.classList.add("show"); // 添加动画类（需要延迟以触发过渡效果）
  }, 10); // 微小延迟确保 display 已生效
}

// 隐藏模态对话框
function hideModal() {
  popup.style.opacity = 0;
  document.getElementById("modal-overlay").style.display = "none";
  // 移除禁止滚动的类--pc
  document.body.classList.remove("no-scroll");

  popup.classList.remove("show"); // 移除动画类
  popup.addEventListener(
    "transitionend",
    () => {
      if (!popup.classList.contains("show")) {
        popup.style.display = "none"; // 动画结束后隐藏弹窗
      }
    },
    { once: true } // 确保事件只触发一次
  );
}
