import firebase from "firebase";

const config = {
    apiKey: "AIzaSyCjCl8PgCTJmMSXQS47TwdWqIaWsIeaTYs",
    authDomain: "usk-portfolio.firebaseapp.com",
    databaseURL: "https://usk-portfolio-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "usk-portfolio",
    storageBucket: "usk-portfolio.appspot.com",
    messagingSenderId: "1094920972460"
};
firebase.initializeApp(config);
export const functions = firebase.functions();