// src/firebase.js
import firebase from 'firebase'

const config = {
    // apiKey: "AIzaSyDblTESEB1SbAVkpy2q39DI2OHphL2-Jxw",
    // authDomain: "fun-food-friends-eeec7.firebaseapp.com",
    databaseURL: "https://react-app-1-88bc4.firebaseio.com/"
    // projectId: "fun-food-friends-eeec7",
    // storageBucket: "fun-food-friends-eeec7.appspot.com",
    // messagingSenderId: "144750278413"
};

firebase.initializeApp(config);
export default firebase;
