import { onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { login } from "../actions/auth"
import { JournalScreen } from "../components/journal/JournalScreen"
import { LoadingScreen } from "../components/loading/LoadingScreen"
import { auth } from "../firebase/firebase-config"
import { AuthRouter } from "./AuthRouter"
import { PrivateRouter } from "./PrivateRouter"
import { PublicRouter } from "./PublicRouter"

export const AppRouter = () => {

    const dispatch=useDispatch();

    const [checking, setchecking] = useState(true);
    const [isLoggedIn, setisLoggedIn] = useState(false);

    useEffect(() => {
     
        onAuthStateChanged(auth,(user)=>{
            
                if(user?.uid){
                    dispatch(login(user.uid,user.displayName));
                    setisLoggedIn(true);
                }else{
                    setisLoggedIn(false);
                }

                setchecking(false);

        })    
    }, [dispatch,setchecking,setisLoggedIn])
    if(checking){
        return <LoadingScreen />
    }

  return (
    <BrowserRouter>
        <Routes>
           
            <Route path="auth/*" element={
                <PublicRouter userState={isLoggedIn}>
                    <AuthRouter />
                </PublicRouter>
     
            } />
            <Route  path="/*" element={
                <PrivateRouter userState={isLoggedIn}>
                    <JournalScreen />
                </PrivateRouter>

            }  />
 
        </Routes>
    </BrowserRouter>

    )
}
