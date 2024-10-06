import React, { useState, useEffect } from "react";
import { useGetfriends } from "./useFriends"; 

export const Total = () => {
    const { friends } = useGetfriends();
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let total1 = 0;
        
        const friendsWithMoney = friends.filter(friend => friend.money);
        friendsWithMoney.forEach(friend => {

            friend.money.forEach(amount => {
                total1 += amount;
            });
        });

        setTotal(total1); 

    }, [friends]);

    return (
        <div className=
            {`${total > 0 ? 'block' : 'hidden'}`}>
        {total}
        </div> 
    );
};

export const useStake = () => {
    const { friends } = useGetfriends();
    const [share, setShare] = useState(0);  

    useEffect(() => {
        let totalAmount = 0;
        let totalFriends = 0;
        
        const friendsWithMoney = friends.filter(friend => friend.money);
       
        friendsWithMoney.forEach(friend => {
            friend.money.forEach(amount => {
                totalFriends++;  
                totalAmount += amount; 
            });
        });

        const calculatedShare = totalFriends > 0 ? parseInt(totalAmount / totalFriends) : 0;
        setShare(calculatedShare);
    }, [friends]); 

    return  share  
};


export const useStatus = () => {
  const share = useStake(); 
  const { friends } = useGetfriends();  
  const friendsWithMoney = friends.filter(friend => friend.money); 
  let status = 0;

  if (friendsWithMoney.length > 0) {
    const totalBudget = friendsWithMoney.reduce((acc, friend) => acc + (friend.budget || 0), 0); 

    
    status = totalBudget > 0 ? parseInt(totalBudget - share) : 0;
  }

  return status;

};
