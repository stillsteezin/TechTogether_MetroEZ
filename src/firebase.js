import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCeRiDzGfvrJa8V2xXbzgnSrzY8n4OP7_I",
  authDomain: "techtalkny-6c3c6.firebaseapp.com",
  databaseURL: "",
  projectId: "techtalkny-6c3c6",
  storageBucket: "techtalkny-6c3c6.appspot.com",
  messagingSenderId: "288392820027",
};

const fire = firebase.intializeApp(config);

export default fire;
