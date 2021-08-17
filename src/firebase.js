import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {

    apiKey: "AIzaSyBGTXRj7VIUnFSjo5Di45-HP7JfAB083BU",

    authDomain: "web-react-57303.firebaseapp.com",

    projectId: "web-react-57303",

    storageBucket: "web-react-57303.appspot.com",

    messagingSenderId: "373370550402",

    appId: "1:373370550402:web:daab75d924bbe2302edc9b"

  }

  export const firebaseApp = firebase.initializeApp(firebaseConfig)