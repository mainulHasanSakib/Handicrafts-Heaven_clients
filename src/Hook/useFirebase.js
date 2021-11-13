import { useEffect, useState } from "react";
import initializeFirebase from "../firebase.init"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import axios from "axios";
initializeFirebase();
const useFirebase=()=>{
const [user, setUser] = useState({});
const [isLoading, setIsLoading]=useState(true);
const [admin, setAdmin]=useState(false)
const auth = getAuth();
const registerUser =(email, password, history) =>{
  setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {

      // Signed in 
      const user = userCredential.user;
      // ...
      saveUser(user)
      history.replace('/')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    })
    .finally(()=> setIsLoading(false));
}
const loginUser = (email, password, location, history) => {
  setIsLoading(true);
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    

    const destination = location?.state?.from || '/';
                history.replace(destination);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
  })
  .finally(() => setIsLoading(false));
}




useEffect(()=>{
    const unsubscribed = onAuthStateChanged(auth, (user) => {
        if (user) {
          
          setUser(user)
        } else {
          setUser({})
        }
        setIsLoading(false);
      });
      return ()=> unsubscribed;
}, [auth])

useEffect(()=>{
  fetch(`https://nameless-basin-43410.herokuapp.com/users/${user.email}`)
  .then(res=>res.json())
  .then(data=> setAdmin(data.admin))
}, [user.email])


const logout=()=>{
  setIsLoading(true);
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      })
      .finally(()=> setIsLoading(false));
}
const saveUser=(data)=>{
  
  axios.post('https://nameless-basin-43410.herokuapp.com/users', data)
  .then(res=>{
    console.log(res)
    if(res.data.insertedId){
        alert('User Added successfully')
        
    }
    
})
}

return{
    user,
    admin,
    isLoading,
    registerUser,
    loginUser,
    logout
}
}
export default useFirebase;