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
    // 雅思
    document.getElementById("IELTS_LISTENING").src = data.IELTS.LISTENING;
    document.getElementById("IELTS_SPEAKING").src = data.IELTS.SPEAKING;
    document.getElementById("IELTS_READING").src = data.IELTS.READING;
    document.getElementById("IELTS_WRITING").src = data.IELTS.WRITING;

    // 托福
    document.getElementById("TOEFL_LISTENING").src = data.TOEFL.LISTENING;
    document.getElementById("TOEFL_SPEAKING").src = data.TOEFL.SPEAKING;
    document.getElementById("TOEFL_READING").src = data.TOEFL.READING;
    document.getElementById("TOEFL_WRITING").src = data.TOEFL.WRITING;

    // 出国留学
    document.getElementById("STUDYABROAD_LISTENING").src =
      data.STUDY_ABROAD.America;
    document.getElementById("STUDYABROAD_SPEAKING").src =
      data.STUDY_ABROAD.England;
    document.getElementById("STUDYABROAD_READING").src =
      data.STUDY_ABROAD.Australia;
    document.getElementById("STUDYABROAD_WRITING").src =
      data.STUDY_ABROAD.New_Zealand;

    // 幼初高英语辅导
    document.getElementById("EngTUTOR_Kindergarten").src =
      data.English_tutoring.Kindergarten;
    document.getElementById("EngTUTOR_Primary").src =
      data.English_tutoring.Primary;
    document.getElementById("EngTUTOR_Junior_high").src =
      data.English_tutoring.Junior_high;
    document.getElementById("EngTUTOR_Senior_high").src =
      data.English_tutoring.Senior_high;
  })
  .catch((error) => {
    console.error("There has been a problem with your fetch operation:", error);
  });
