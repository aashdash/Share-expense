import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../pages/firebaseConfig";
import { useGetUserInfo } from "./getUseInfo";

export const useGetfriends = () => {
  const [friends, setFriends] = useState([]);
  const [calci, setCalci] = useState({
    total: 0,
    share1: 0,
  });

  const { userID } = useGetUserInfo();
  const friendsCollection = collection(db, userID);

  const getFriends = async () => {
    try {
      const queryFriends = query(
        friendsCollection,
        orderBy("createdAt")
      );

      const querySnapshot = await getDocs(queryFriends); 
      let docs = [];
      let total1 = 0;
      let totalFriends = 0;

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const id = doc.id;
        docs.push({ ...data, id });

        if (data.money && Array.isArray(data.money)) {
          data.money.forEach((amount) => {
            total1 += amount;
            totalFriends++;
          });
        }
      });

      const calculatedShare = totalFriends > 0 ? parseInt(total1 / totalFriends) : 0;

      setFriends(docs);
      setCalci({
        total: total1,
        share1: calculatedShare,
      });

    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getFriends();
  }, );

  return { friends, calci };
};
