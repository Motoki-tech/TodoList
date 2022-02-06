import { createContext, useEffect, useState, useContext } from "react";
import firebase from "./firebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";

type AuthContextProps = {
  currentUser: string | null | undefined;
};

const AuthContext = createContext<AuthContextProps>({ currentUser: undefined });

export const AuthProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<string | null | undefined>(
    undefined
  );

  useEffect(() => {
    const auth = getAuth(firebase);
    onAuthStateChanged(auth, (user) => {
      // ログイン状態が変化すると呼ばれる
      setCurrentUser(user?.uid);
    });
  }, []);
  return (
    <AuthContext.Provider value={{ currentUser: currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
