import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

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

// 通用函數：即時渲染數學公式
const renderMath = (textareaId, previewId) => {
  const textarea = document.getElementById(textareaId);
  const previewDiv = document.getElementById(previewId);

  textarea.addEventListener("input", () => {
    const content = textarea.value.trim();
    previewDiv.innerHTML = content; // 更新預覽內容
    MathJax.typesetPromise([previewDiv]).catch((err) => {
      console.error(`渲染失敗 (${textareaId}):`, err);
    });
  });
};

// 初始化數學公式即時渲染
document.addEventListener("DOMContentLoaded", () => {
  const formElements = [
    { textareaId: "question-content", previewId: "preview-question" },
    { textareaId: "question-answer", previewId: "preview-answer" },
  ];

  formElements.forEach(({ textareaId, previewId }) => renderMath(textareaId, previewId));
});

// 將題目存入 Firestore 的函數
const addQuestion = async (questionContent, answerContent, tags, source) => {
  try {
    const questionId = `question-${Date.now()}`; // 使用時間戳作為唯一 ID
    const questionData = {
      content: questionContent,
      answer: answerContent,
      tags,
      source,
      createdAt: new Date().toISOString(),
    };

    // 寫入資料庫
    await setDoc(doc(db, "questions", questionId), questionData);
    console.log("題目已成功存入 Firestore！");
    alert("題目已成功提交！");
  } catch (error) {
    console.error("存儲資料到 Firestore 時發生錯誤：", error);
    alert("提交失敗，請檢查日誌或配置！");
    throw error; // 向外拋出錯誤，供調試使用
  }
};

// 表單提交事件處理
document.getElementById("upload-form").addEventListener("submit", async (event) => {
  event.preventDefault(); // 阻止默認提交行為

  try {
    const questionContent = document.getElementById("question-content").value.trim();
    const answerContent = document.getElementById("question-answer").value.trim();
    const tags = document.getElementById("question-tags").value.trim().split(",").map(tag => tag.trim());
    const source = document.getElementById("question-source").value.trim();

    if (!questionContent || !answerContent || !tags || !source) {
      alert("請填寫所有欄位！");
      return;
    }

    // 調用存儲函數
    await addQuestion(questionContent, answerContent, tags, source);

    // 清空表單
    document.getElementById("upload-form").reset();
    alert("表單已清空！");
  } catch (error) {
    console.error("提交過程中出現錯誤：", error);
    alert("提交過程中出現錯誤，請檢查日誌！");
  }
});
