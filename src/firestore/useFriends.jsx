import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../pages/firebaseConfig";
import { useGetUserInfo } from "./getUseInfo";


export const useGetfriends = () => {
  
  const [friends, setFriends] = useState([]);
  const [calci, setCalci] = useState({
     total:0,
     share1: 0,
    });
  
  const friendsCollection = collection(db, "friends");
  const { userID } = useGetUserInfo();

  const getFriends = async () => {
    let unsubscribe;
    try {
      const queryFriends = query(
        friendsCollection,
        where("userID", "==", userID),
        orderBy("createdAt")
      );
      unsubscribe = onSnapshot(queryFriends, (snapshot) => {
        let docs= []; 
        let total1 = 0;
        let totalFriends = 0;
        
        snapshot.forEach((doc) => {
          const data = doc.data();
          const id = doc.id;
          docs.push({...data, id,});

          
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
          total:total1,
          share1: calculatedShare,

        });

      });

    } catch (err) {
      console.error(err);
    }
    return () => unsubscribe();
  };

  useEffect(() => {
    getFriends();
  }, );

  return { friends,calci };
};

