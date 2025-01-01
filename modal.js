// 显示模态对话框并设置内容
function showModal(content) {
  if (!content) return;
  // 动态设置内容
  document.getElementById("modal-body").innerHTML = content;
  document.getElementById("modal-overlay").style.display = "block";
  document.getElementById("modal-content").style.display = "block";
  document.getElementById("modal-content").style.opacity = 1;

  setTimeout(() => {
    document.getElementById("modal-content").classList.add("show"); // 添加动画类（需要延迟以触发过渡效果）
  }, 10); // 微小延迟确保 display 已生效
}

// 隐藏模态对话框
function hideModal() {
  document.getElementById("modal-content").style.opacity = 0;
  document.getElementById("modal-overlay").style.display = "none";
  // 移除禁止滚动的类--pc
  document.body.classList.remove("no-scroll");
  // 移除动画类
  document.getElementById("modal-content").classList.remove("show");
  // 隐藏弹窗
  document.getElementById("modal-content").style.display = "none";
}
