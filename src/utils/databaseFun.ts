import { getApp } from '@react-native-firebase/app';
import {getDatabase, ref,get, set, push, remove, query, orderByChild, equalTo, update} from '@react-native-firebase/database'; 

const app = getApp();
const db = getDatabase(app);

export const addToDatabase = async (path:string, payload:any) => {
    try {
      console.log(`user/${path}`,payload,'path')
      await set(ref(db, `user/${path}`), payload);
      console.log('hello data data')
      return true;
    } catch (error) {
      console.error('❌ Error adding data:', error);
      return false;
    }
};

export const pushToDatabase = async (path:string, payload:any) => {
    try {
      await push(ref(db, `user/${path}`), payload);
      console.log('hellodata data')
      return true;
    } catch (error) {
      console.error('❌ Error adding data:', error);
      return false;
    }
};
  
export const alreadyExistsInDatabase = async (path: string) => {
  const userRef = ref(db, `user/${path}`);
  try {
    console.log('in trye ', path)
    const snapshot = await get(userRef);
      return snapshot.exists();
  } catch (err) {
    console.log(err,'error')
  }
}

export const getDataFromDatabase = async (path: string) => {
  const userRef = ref(db, `user/${path}`);
  try {
    const snapshot = await get(userRef);
     return  snapshot?._snapshot?.value;
  } catch (err) {
    console.log(err, 'error')
    return null;
  }
}
export const removeDataWithQuery = async (path: string, key: string, value: string) => {
  try {
    const dataRef = ref(db, `user/${path}`);
    const q = query(dataRef, orderByChild(key), equalTo(value));

    const snapshot = await get(q);

    if (snapshot.exists()) {
      let userKeyToDelete = null;

      snapshot.forEach((childSnapshot: any) => {
        userKeyToDelete = childSnapshot.key; // Get user ID (e.g., "user3")
      });

      if (userKeyToDelete) {
        await remove(ref(db, `user/${path}/${userKeyToDelete}`));
        return true;
      }
    }
    console.log("No matching user found.");
    return false;
  } catch (err) {
    console.error("Error removing user:", err);
    return false;
  }
};