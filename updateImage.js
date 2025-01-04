// 使用fetch API获取JSON文件
fetch("imgs.json")
  .then((response) => {
    // 确保请求成功
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json(); // 解析JSON数据
  })
  .then((data) => {
    // 图片路径
    const images = data.HERO;

    // 获取当前时间戳（毫秒）
    const now = Date.now();

    // 从 localStorage 获取上次显示时间和图片索引
    const lastTimestamp = localStorage.getItem("lastTimestamp");
    const lastImageIndex = localStorage.getItem("lastImageIndex");

    // 获取图片元素
    const imageElement = document.getElementById("hero__image");

    // 随机获取图片索引的函数
    function getRandomIndex(excludeIndex, max) {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * max); // 生成随机索引
      } while (randomIndex === excludeIndex); // 确保与上次显示的图片不同
      return randomIndex;
    }

    // 检查时间是否超过24小时
    if (!lastTimestamp || now - lastTimestamp >= 24 * 60 * 60 * 1000) {
      // 超过24小时或者首次访问，随机选择一张图片
      const nextIndex =
        getRandomIndex(parseInt(lastImageIndex), images.length) || 0;
      imageElement.src = images[nextIndex]; // 显示随机图片

      // 更新 localStorage
      localStorage.setItem("lastTimestamp", now); // 记录当前时间
      localStorage.setItem("lastImageIndex", nextIndex); // 记录新图片索引
    } else {
      // 未超过24小时，保持当前图片
      imageElement.src = images[lastImageIndex || 0];
    }

    // 执行图片更新逻辑
    updateImage();
  })
  .catch((error) => {
    console.error("There has been a problem with your fetch operation:", error);
  });
