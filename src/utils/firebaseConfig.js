import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDNwNXyS9MKFt_x3Zo3QoNfkeCJeHuJbRo",
    authDomain: "polosarango-460b7.firebaseapp.com",
    projectId: "polosarango-460b7",
    storageBucket: "polosarango-460b7.appspot.com",
    messagingSenderId: "754788487909",
    appId: "1:754788487909:web:26c68b6679098ec1cd7a0c"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);


  export default db;