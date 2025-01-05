const translations = {
  // 英文
  en: {
    logo: "IRIS",
    Home: "Home",
    Profession: "Profession",
    Projects: "Projects",
    About: "About",
    Join: "Join",
    introduce: "Hello! I'm Iris",
    location: "IELTS Instructo Based in Shang Hai, CHINA.",
    workForYou:
      "IELTS / TOEFL / STUDY ABROAD / English Tutoring For Primary, Middle,And High Schools One-Stop Solution.",
    workWithMe: "Work With Me",
    sendEmail: "Send Email",
    professionScore: "High IELTS Score And Experience As a Lecturer",
    professionScoreExperience:
      "High IELTS score and extensive IELTS teaching experience.",
    listening: "LISTENING",
    speaking: "SPEAKING",
    reading: "READING",
    writing: "WRITING",
  },
  // 中文
  zh: {
    logo: "IRIS",
    Home: "首页",
    Profession: "专业",
    Projects: "项目",
    About: "关于",
    Join: "加入",
    introduce: "你好! 我是 Iris",
    location: "雅思教学总部位于中国上海。",
    workForYou: "雅思 / 托福 / 留学 / 中小学英语辅导，一站式解决方案。",
    workWithMe: "有幸与你共事",
    sendEmail: "邮件联系",
    professionScore: "雅思高分和讲师经验",
    professionScoreExperience: "雅思成绩高，雅思教学经验丰富。",
    listening: "听",
    speaking: "说",
    reading: "读",
    writing: "写",
  },
  // 繁体 https://tool.lu/zhconvert/
  tc: {
    logo: "IRIS",
    Home: "首頁",
    Profession: "專業",
    Projects: "項目",
    About: "關於",
    Join: "加入",
    introduce: "你好! 我是 Iris",
    location: "雅思教學總部位於中國上海。",
    workForYou: "雅思 / 托福 / 留學 / 中小學英語輔導，一站式解決方案。",
    workWithMe: "有幸與你共事",
    sendEmail: "郵件聯繫",
    professionScore: "雅思高分和講師經驗",
    professionScoreExperience: "雅思成績高，雅思教學經驗豐富。",
    listening: "聽",
    speaking: "說",
    reading: "讀",
    writing: "寫",
  },
};

function updateTranslations(lang) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key] || key;
  });
}

const userLang = localStorage.getItem("language") || "en";

// 默认英文
updateTranslations(userLang);
