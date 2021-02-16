import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCSNJ52snFUAjhpYcgAqFp-qBjq1yebTHA",
    authDomain: "onepin-b6ce9.firebaseapp.com",
    projectId: "onepin-b6ce9",
    storageBucket: "onepin-b6ce9.appspot.com",
    messagingSenderId: "486348993005",
    appId: "1:486348993005:web:abf9c5e5b332a4b22bb7e4"
  };

const fb =  firebase.initializeApp(firebaseConfig);

export default fb;