import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCXLxoWia4GJlB2_IrF1NxOJ8Z5AeKTTdw",
  authDomain: "attend-7f48a.firebaseapp.com",
  databaseURL: "https://attend-7f48a-default-rtdb.firebaseio.com",
  projectId: "attend-7f48a",
  storageBucket: "attend-7f48a.appspot.com",
  messagingSenderId: "80086592781",
  appId: "1:80086592781:web:db35b3f7bb4992e8565444"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export default  firebase.database()
 
 

  