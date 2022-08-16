// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsaSQ2FocmRFYBpTfjAcIXYpS1Aw-IEBY",
  authDomain: "mrmission2-bb682.firebaseapp.com",
  projectId: "mrmission2-bb682",
  storageBucket: "mrmission2-bb682.appspot.com",
  messagingSenderId: "136972164228",
  appId: "1:136972164228:web:6ac9e55fc9992f6e3636d1",
  measurementId: "G-8ZZHD1DDK9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Firebase storage reference
const storage = getStorage(app);
export default storage;