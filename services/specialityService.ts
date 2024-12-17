import { collection, addDoc, getDoc, getDocs, updateDoc, deleteDoc, doc, query, where } from "firebase/firestore";
import { firestore } from "@/lib/firebase";
import { Speciality } from "@/types/speciality.type";

export const getSpecialities = async (): Promise<Speciality[]> => {
  try {
    const q = query(collection(firestore, "specialities"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }) as Speciality);
  } catch (error) {
    console.error("❌ Error getting user tasks:", error);
    throw error;
  }
};
