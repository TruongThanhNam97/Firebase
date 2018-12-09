import * as firebase from "firebase";
// Initialize Firebase
var config = {
    apiKey: "AIzaSyDpxKm6NaXKkO06z2Lw8KD2uJ0V6mbjluU",
    authDomain: "pratice-firebase.firebaseapp.com",
    databaseURL: "https://pratice-firebase.firebaseio.com",
    projectId: "pratice-firebase",
    storageBucket: "pratice-firebase.appspot.com",
    messagingSenderId: "656573298107"
  };
  firebase.initializeApp(config);

  export default firebase.database().ref("Account");