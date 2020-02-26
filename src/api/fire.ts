import firebase from "firebase/app";
import "firebase/database";
const config = {
  apiKey: "AIzaSyA46_r2zGujSuohyIfdeNNpEaAc49kYPdE",
  authDomain: "nilsbenz-e014c.firebaseapp.com",
  databaseURL: "https://nilsbenz-e014c.firebaseio.com",
  projectId: "nilsbenz-e014c",
  storageBucket: "nilsbenz-e014c.appspot.com",
  messagingSenderId: "609309296133",
  appId: "1:609309296133:web:bae04d5a329ce789cb3e6c",
  measurementId: "G-Q2ZR94BBPW"
};
const fire = firebase.initializeApp(config);
export default fire;
