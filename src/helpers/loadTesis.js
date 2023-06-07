import { collection, getDocs } from "firebase/firestore/lite"
import { FirebaseDB } from "../firebase"

export const loadTesis = async(uid = '') => {
  const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`)
  const docs = await getDocs(collectionRef)

  const tesis = []
  docs.forEach(doc => tesis.push({id: doc.id, ...doc.data()}))
  
  return tesis
}
