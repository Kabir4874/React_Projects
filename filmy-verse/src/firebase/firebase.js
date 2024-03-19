import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4OoN-cyni5_EAcli2bHjix8nHbCy0pBE",
  authDomain: "filmyverse-b04fc.firebaseapp.com",
  projectId: "filmyverse-b04fc",
  storageBucket: "filmyverse-b04fc.appspot.com",
  messagingSenderId: "844827702217",
  appId: "1:844827702217:web:96123b21bf329bb9576e18",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRes = collection(db, "movies");
export default app;
