import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query, where } from "firebase/firestore";

export const getItems = async (userId) => {
  if (!userId) return [];
  const q = query(collection(db, "users", userId, "items"));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const addItem = async (userId, item) => {
  if (!userId) return;
  const docRef = await addDoc(collection(db, "users", userId, "items"), item);
  return docRef.id;
};
