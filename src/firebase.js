import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBPS0BhVt3mK0VtpK_-m7kPsv2_W88sZJs",
  authDomain: "fir-32320.firebaseapp.com",
  projectId: "fir-32320",
  storageBucket: "fir-32320.appspot.com",
  messagingSenderId: "464928387219",
  appId: "1:464928387219:web:c6a0c4819dfe04b6b85d66"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
