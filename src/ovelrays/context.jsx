import React, { createContext, useState, useContext } from 'react';

export const AppContext = createContext();

export const AppProvider= ({ children }) => {
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [modal4, setModal4] = useState(false);
  const [modal5, setModal5] = useState(false);
  const [friends2, setFriends2] = useState([]);
  const [name,setName]=useState("")
  const [budget,setBudget]=useState(0)
  const [members,setMembers]=useState(0)
  const [money,setMoney]=useState([])
  const [money2,setMoney2]=useState([])
  const [showThirdSection, setShowThirdSection] = useState(false);

  return (
    <AppContext.Provider value={{ 
      modal, setModal,
      modal2, setModal2,
      modal3, setModal3,
      modal4, setModal4,
      modal5, setModal5,
      friends2, setFriends2,
      name,setName,
      budget,setBudget,
      members,setMembers,
      money,setMoney,
      money2,setMoney2,
      showThirdSection, setShowThirdSection
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
