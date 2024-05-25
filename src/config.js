import firebase from "firebase";

const firebaseApp = firebase.initializeApp ({
  apiKey: "AIzaSyAlzqKuvKPnDYN71nv7XnIIVPm0E9UPb2A",
  authDomain: "instagram-auth-e680b.firebaseapp.com",
  projectId: "instagram-auth-e680b",
  storageBucket: "instagram-auth-e680b.appspot.com",
  messagingSenderId: "1083923043835",
  appId: "1:1083923043835:web:2262d2cccb2f74e893675e"
})

export const auth = firebaseApp.auth()