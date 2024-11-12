import { onMounted, computed, ref } from 'vue';
import { defineStore } from 'pinia';
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
} from 'firebase/firestore';
import firebaseApp from '@/firebase.config';

export const useUserStore = defineStore('users', () => {
  const users = ref([]);
  const getUsers = async () => {
    try {
      let usersdb = [];
      const db = getFirestore(firebaseApp);
      const querySnap = await getDocs(collection(db, 'users'));
      querySnap.forEach((doc) => {
        usersdb.push({ ...doc.data(), _id: doc.id });
      });
      users.value = usersdb;
    } catch (error) {
      throw Error(error);
    }
  };

  const addUser = async (name, email) => {
    try {
      const db = getFirestore(firebaseApp);
      if (users.value.some((user) => user.email === email)) {
        throw Error('email already exist');
      }
      await addDoc(collection(db, 'users'), { name, email });
      getUsers();
    } catch (error) {
      throw Error(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      const db = getFirestore(firebaseApp);
      const userRef = doc(db, 'users', id);
      await deleteDoc(userRef);
      getUsers();
    } catch (error) {
      throw Error(error);
    }
  };

  const updateUser = async (id, name, email) => {
    try {
      const db = getFirestore(firebaseApp);
      const userRef = doc(db, 'users', id);

      if (users.value.some((user) => user.email === email && user._id !== id)) {
        throw Error('email is already taken');
      }

      await updateDoc(userRef, {
        name,
        email,
      });

      getUsers();
    } catch (error) {
      throw Error(error);
    }
  };

  onMounted(() => {
    getUsers();
  });

  return { users: computed(() => users), getUsers, addUser, deleteUser, updateUser };
});
