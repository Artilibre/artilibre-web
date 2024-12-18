import { collection, addDoc, getDoc, getDocs, updateDoc, deleteDoc, doc, query, where } from "firebase/firestore";
import { firestore } from "@/lib/firebase";
import { Job } from "@/types/job.type";

export const getJobs = async (): Promise<Job[]> => {
  try {
    const q = query(collection(firestore, "jobs"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }) as Job);
  } catch (error) {
    console.error("❌ Error getting user tasks:", error);
    throw error;
  }
};
