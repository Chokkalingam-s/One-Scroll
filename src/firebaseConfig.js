import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBnYDAbbY4oMCd7aGTiKxpinyPFjZscMiw",
  authDomain: "onescroll-choks78.firebaseapp.com",
  databaseURL: "https://onescroll-choks78-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "onescroll-choks78",
  storageBucket: "onescroll-choks78.appspot.com",
  messagingSenderId: "737969586464",
  appId: "1:737969586464:web:2ca340da3f2936a5d41745"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { auth, app, firestore,storage };

