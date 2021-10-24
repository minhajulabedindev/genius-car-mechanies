import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialization from "../Firebase/firebase.init";

firebaseInitialization();
const googleProvider = new GoogleAuthProvider();
const useHooks = () => {
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const auth = getAuth();

  const signInWithGoogle = () => {
    setLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
      })
      .finally(() => setLoading(false));
  };

  ///
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setLoading(false);
    });
    return () => unSubscribe;
  }, []);

  //logout//
  const logOut = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(() => setLoading(false));
  };

  return {
    user,
    isLoading,
    signInWithGoogle,
    logOut,
  };
};

export default useHooks;
