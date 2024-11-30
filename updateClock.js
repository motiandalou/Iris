function updateClock() {
  var now = new Date(); // 获取当前时间
  var hours = now.getHours(); // 小时
  var minutes = now.getMinutes(); // 分钟
  var seconds = now.getSeconds(); // 秒

  // 格式化时间，保证单数字符前有前导零
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // 组合时间格式
  var timeStr = hours + ":" + minutes + ":" + seconds;

  // 显示在页面上
  document.getElementById("clock").textContent = timeStr;

  // 每秒更新时间
  setTimeout(updateClock, 1000);
}

// 初始化时钟
updateClock();
