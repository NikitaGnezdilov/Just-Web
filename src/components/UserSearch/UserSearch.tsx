import React, { useContext, useState } from "react";
import "./UserSearch.scss";
import placeholder from "../../assets/placeholder.jpg";

import {
  collection,
  doc,
  DocumentData,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../../firebase";
import { AuthContext } from "../../context/AuthConext";

type Props = {};

const UserSearch = (props: Props) => {
  const currentUser = useContext(AuthContext);
  const [queryUserName, setQueryUserName] = useState<string>("");
  const [user, setUser] = useState<DocumentData | null>();
  const [err, setErr] = useState<boolean>(false);

  async function handleSearch() {
    const q = query(
      collection(db, "users"),
      where("userName", "==", queryUserName)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (e) {
      setErr(true);
    }
  }

  function handleKey(e: React.KeyboardEvent) {
    e.code === "Enter" && handleSearch();
  }

  async function handleSelect() {
    const combinedId =
      currentUser?.uid !== undefined && currentUser?.uid > user?.uid
        ? currentUser?.uid + user?.uid
        : user?.uid + currentUser?.uid;

    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        await updateDoc(doc(db, "usersChats", currentUser?.uid as string), {
          [combinedId + ".userInfo"]: {
            uid: user?.uid,
            displayName: user?.dispayName,
            photoURL: user?.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "usersChats", user?.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser?.uid,
            dispayName: currentUser?.displayName,
            photoURL: currentUser?.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {}
    setUser(null);
    setQueryUserName('')
  }

  return (
    <div className="userSearch">
      <div className="userSearch__input">
        <input
          type="text"
          placeholder="Найти пользователя"
          onChange={(e) => setQueryUserName(e.target.value)}
          onKeyDown={handleKey}
          value={queryUserName}
        />
      </div>
      {err && <span>Пользователи не найдены</span>}
      {user !== null && (
        <div className="userSearch__result" onClick={handleSelect}>
          <img src={user?.photoURL} alt="avatar" />
          <div className="userSearch__info">
            <span>{user?.userName}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
