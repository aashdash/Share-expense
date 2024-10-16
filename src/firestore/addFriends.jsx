import { addDoc, collection, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db } from "../pages/firebaseConfig";
import { useGetUserInfo } from "./getUseInfo";

export const useAddFriends = () => {
  const { userID } = useGetUserInfo();
  const friendsCollection = collection(db, userID);
  

  const addFriends = async ({ name, budget, members, friends2, money }) => {
    await addDoc(friendsCollection, {
      userID,
      name,
      budget,
      members,
      friends2,
      money,
      createdAt: serverTimestamp(),
    });
  };

  const addFriends2 = async ({ sharename, money2 }) => {
    await addDoc(friendsCollection, {
      userID,
      sharename,
      money2, 
      createdAt: serverTimestamp(),
    });
  };

  const updateFriendMoney = async (docID, updatedMoney) => {
    const friendDoc = doc(db, userID, docID);
    await updateDoc(friendDoc, {
      money: updatedMoney, 
    });
  };

  return { addFriends, addFriends2, updateFriendMoney };
};
