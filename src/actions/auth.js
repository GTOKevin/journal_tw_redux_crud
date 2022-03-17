import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import { auth, facebookAuthProvider, githubAuthProvider, googleAuthProvider } from "../firebase/firebase-config";
import { types } from "../types/types"
import { finishLoading, startLoading } from "./ui";

export const startLoginEmailPassword=(email,password)=>{
    return (dispatch)=>{

        dispatch(startLoading());
        signInWithEmailAndPassword(auth,email,password)
        .then(({user})=>{

            dispatch(login(user.uid,user.displayName));
            dispatch(finishLoading());

        }).catch((error)=>{
            Swal.fire('Error',error.code,'error');
            dispatch(finishLoading());

        })

      

    }
}

export const startFacebookLogin=()=>{
    return (dispatch)=>{
    
        signInWithPopup(auth,facebookAuthProvider)
            .then(({user})=>{

                dispatch(login(user.uid,user.displayName));
    
            }).catch((error)=>{
                
            Swal.fire('Error',error.code,'error');
                console.log(error)
            })

    }
}

export const startGithubLogin=()=>{
    return (dispatch)=>{
        signInWithPopup(auth,githubAuthProvider)
        .then(({user})=>{

            dispatch(login(user.uid,user.displayName));

        }).catch((error)=>{
            
            Swal.fire('Error',error.code,'error');
            console.log(error)
        })
    }
}

export const startGoogleLogin=()=>{
    return (dispatch)=>{
        signInWithPopup(auth,googleAuthProvider)
        .then(({user})=>{

            dispatch(login(user.uid,user.displayName));

        }).catch((error)=>{
            
            Swal.fire('Error',error.code,'error');
            console.log(error)
        })
    }
}

export const startRegisterWithEmailPasswordName= (email,password,name)=>{
    return(dispatch)=>{
        createUserWithEmailAndPassword(auth,email,password)
            .then( async ({user})=>{
                await updateProfile(user,{displayName:name});
            }).catch(e =>{
                console.log(e);
               console.log(JSON.parse(JSON.stringify(e)));
            console.log(e.code);
            })
    }
}

export const login = (uid,displayName) => {

    return{
        type: types.login,
        payload:{
            uid,
            displayName
        }
    }

}

export const startLogout=()=>{
    return async (dispatch)=>{
        await signOut(auth);
        dispatch(logout());
    }
}

export const logout=()=>({
    type:types.logout
})