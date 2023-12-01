// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtmwiA-wniQvOBpmtLj03jx4doqi9dMHc",
  authDomain: "datacontact-305c3.firebaseapp.com",
  projectId: "datacontact-305c3",
  storageBucket: "datacontact-305c3.appspot.com",
  messagingSenderId: "343612040734",
  appId: "1:343612040734:web:bc1b1bb320836d23df700f",
  measurementId: "G-JT879NE9SP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const apiFirebase = getFirestore(app)
export default apiFirebase