import { useAppContext } from "./context";
import { db } from "../pages/firebaseConfig";
import { deleteDoc, collection, getDocs, doc } from "firebase/firestore";
import { useGetfriends } from "../firestore/useFriends";
import { useGetUserInfo } from "../firestore/getUseInfo";


export const Sh2 = () => {
  const { setModal2, setModal5 } = useAppContext();
  const { friends } = useGetfriends();
  const { userID } = useGetUserInfo(); 
  const deleteUserDocuments = async () => {
    try {
      const friendsCollection = collection(db, userID);
      const friendsSnapshot = await getDocs(friendsCollection);

      const batchDeletePromises = friendsSnapshot.docs
        .filter((document) => document.data().userID === userID)
        .map((document) => deleteDoc(doc(db, userID, document.id)));

      await Promise.all(batchDeletePromises);
      console.log("User's documents deleted successfully!");
    } catch (error) {
      console.error("Error deleting documents: ", error);
    }
  };

  return (
    <div className="fixed inset-0 h-full w-full flex justify-center items-center bg-black/50 z-auto">
      <div
        className="bg-white border-2 border-black rounded-lg flex justify-center items-center 
        relative w-[280px] h-[300px]
        md:h-[220px] md:w-[550px] md:bg-opacity-90"
      >
        <div
          className="absolute top-0 right-2 text-2xl md:text-[32px] cursor-pointer"
          onClick={() => {
            setModal2(false);
          }}
        >
          &times;
        </div>
        <div>
          {friends.map((friend) => {
            const { name, members, id } = friend;
            if (members) {
              return (
                <div
                  key={id}
                  className="flex flex-col text-center justify-center items-center gap-9"
                >
                  <h1 className="max-md:w-[200px] font-palanquin text-lg md:text-xl">
                    Are you sure you want to delete <span className="capitalize text-green-500">{name}</span> expenses?
                  </h1>
                  <button
                    className="cursor-pointer rounded-lg bg-customBlue text-white text-center
                      hover:bg-white hover:text-customBlue hover:border-2 hover:border-customBlue
                      text-xl font-normal m-3 h-10 w-28
                      md:h-[48px] md:w-[130px] md:text-2xl md:border-2 md:border-black md:bg-white md:text-black 
                      md:hover:border-white md:hover:bg-black md:hover:text-white"
                    onClick={() => {
                      setModal5(false);
                      deleteUserDocuments(); 
                      setModal2(false);
                    }}
                  >
                    Delete
                  </button>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};
