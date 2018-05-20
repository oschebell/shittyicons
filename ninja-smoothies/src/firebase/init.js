import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBgQ285Tw16vuAagTUcuGySqR61Uz7hkhM",
  authDomain: "udemy-ninja-smoothies-8dd21.firebaseapp.com",
  databaseURL: "https://udemy-ninja-smoothies-8dd21.firebaseio.com",
  projectId: "udemy-ninja-smoothies-8dd21",
  storageBucket: "udemy-ninja-smoothies-8dd21.appspot.com",
  messagingSenderId: "1006329203845"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })


// export firestore database
export default firebaseApp.firestore()
