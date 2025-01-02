<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
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
  const analytics = getAnalytics(app);

  // 初始化 Firestore
  export const db = getFirestore(app); // 導出 Firestore 資料庫對象
</script>
