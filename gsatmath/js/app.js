import { collection, getDocs, query, where } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

// Firebase 配置
const firebaseConfig = {
  apiKey: "AIzaSyBgjMElQaaYvd5ejp_wWpcS5roYgGbtjSk",
  authDomain: "gsatmath-81e64.firebaseapp.com",
  projectId: "gsatmath-81e64",
  storageBucket: "gsatmath-81e64.appspot.com",
  messagingSenderId: "965998415046",
  appId: "1:965998415046:web:ce7d9f1d75d7b34b6bdbc7",
  measurementId: "G-ML49593FGY",
};

// 初始化 Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // 初始化 Firestore 資料庫

// DOM 元素選取
const questionList = document.getElementById("question-list");
const searchBox = document.getElementById("search-box");
const searchBtn = document.getElementById("search-btn");
const tagButtons = document.querySelectorAll(".tag");

// 載入所有題目
const loadAllQuestions = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "questions"));
    questionList.innerHTML = ""; // 清空現有內容

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const questionCard = createQuestionCard(data);
      questionList.appendChild(questionCard);
    });

    // 渲染數學公式
    MathJax.typesetPromise([questionList]).catch((err) => {
      console.error("數學公式渲染失敗：", err);
    });
  } catch (error) {
    console.error("載入題目失敗：", error);
    alert("無法載入題目，請稍後重試！");
  }
};

// 搜尋題目
const searchQuestions = async (keyword) => {
  try {
    const q = query(
      collection(db, "questions"),
      where("tags", "array-contains", keyword)
    );
    const querySnapshot = await getDocs(q);

    questionList.innerHTML = ""; // 清空現有內容

    if (querySnapshot.empty) {
      questionList.innerHTML = "<p>沒有符合的結果</p>";
      return;
    }

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const questionCard = createQuestionCard(data);
      questionList.appendChild(questionCard);
    });

    // 渲染數學公式
    MathJax.typesetPromise([questionList]).catch((err) => {
      console.error("數學公式渲染失敗：", err);
    });
  } catch (error) {
    console.error("搜尋題目失敗：", error);
    alert("搜尋失敗，請稍後重試！");
  }
};

// 創建題目卡片
const createQuestionCard = (data) => {
  const card = document.createElement("div");
  card.classList.add("question-card");

  card.innerHTML = `
    <h3>${data.content}</h3>
    <p><strong>解答：</strong> ${data.answer}</p>
    <p><strong>標籤：</strong> ${data.tags.join(", ")}</p>
    <p><strong>來源：</strong> ${data.source}</p>
  `;

  return card;
};

// 初始化事件
document.addEventListener("DOMContentLoaded", () => {
  loadAllQuestions();

  // 搜尋按鈕點擊事件
  searchBtn.addEventListener("click", () => {
    const keyword = searchBox.value.trim();
    if (keyword) {
      searchQuestions(keyword);
    } else {
      alert("請輸入搜尋關鍵字！");
    }
  });

  // 熱門標籤點擊事件
  tagButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const tag = button.dataset.tag;
      searchQuestions(tag);
    });
  });
});
