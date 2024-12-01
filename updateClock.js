function updateClock() {
  var date = new Date();
  var year = date.getUTCFullYear();
  var month = date.getUTCMonth() + 1; // 月份从0开始，需要加1
  var day = date.getUTCDate();
  var hour = date.getUTCHours() + 8; // 北京时区比UTC时间快8小时
  var minute = date.getUTCMinutes();
  var second = date.getUTCSeconds();

  // 格式化时间，保证单数字符前有前导零
  hours = hour < 10 ? "0" + hour : hour;
  minutes = minute < 10 ? "0" + minute : minute;
  seconds = second < 10 ? "0" + second : second;

  // 组合时间格式
  var beijingTime =
    year +
    "-" +
    month +
    "-" +
    day +
    " " +
    hours +
    ":" +
    minutes +
    ":" +
    seconds;

  // 显示在页面上
  document.getElementById("clock").textContent = beijingTime;

  // 每秒更新时间
  setTimeout(updateClock, 1000);
}

// 初始化时钟
updateClock();
