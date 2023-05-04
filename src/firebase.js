import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD8f6ouzNHGQqh5kQKAYndNkPq1o-wzc90",
  authDomain: "all-auth-d4219.firebaseapp.com",
  projectId: "all-auth-d4219",
  storageBucket: "all-auth-d4219.appspot.com",
  messagingSenderId: "501008566343",
  appId: "1:501008566343:web:f5e94598d4b275555e8962",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
