const text = "Iris Studio";
const typingElement = document.getElementById("typing");
let index = 0;

function type() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(type, 100); // 100毫秒打一个字
  } else {
    // 重置index并等待一段时间后清除文本
    index = 0;
    setTimeout(clear, 1000); // 等待1秒后清除文本
  }
}

function clear() {
  typingElement.textContent = ""; // 清除文本
  setTimeout(type, 1000); // 等待1秒后开始打字
}

// 开始打字
type();
