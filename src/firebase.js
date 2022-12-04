import firebase from "firebase"
const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyBk3TojTwM-VuX2TjZGnhXIRz20Z-FIIIs",
    authDomain: "todo-app-32578.firebaseapp.com",
    projectId: "todo-app-32578",
    storageBucket: "todo-app-32578.appspot.com",
    messagingSenderId: "970708909698",
    appId: "1:970708909698:web:050d28a030ce381de57e9b",
    measurementId: "G-DG00K0S876"
})

const db=firebaseApp.firestore()
// const auth=firebase.auth()

export default db