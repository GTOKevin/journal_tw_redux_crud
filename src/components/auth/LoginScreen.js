import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { startFacebookLogin, startGithubLogin, startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import Swal from 'sweetalert2';

export const LoginScreen = () => {

    const {loading} =useSelector(state=>state.ui);
    console.log(loading);
    const dispatch=useDispatch();

    const [values,handleInputChange] = useForm({email:'kevin@gmail.com',password:'123456'});

    const {email,password}=values;

    const handleLogin=(e)=>{
        e.preventDefault();
        if(loginValidate()){
        dispatch(startLoginEmailPassword(email,password));
        }
    }

    const handleGoogleLogin=()=>{
        dispatch(startGoogleLogin());
    }

    const handleFacebookLogin=()=>{
        dispatch(startFacebookLogin());
    }

    const handleGithubLogin=()=>{
        dispatch(startGithubLogin());
    }

    const loginValidate=()=>{
        if(!validator.isEmail(email) || password.trim().length===0){
            Swal.fire('Info','Email u/o contraseña no valido','info');
            return false;
        }
        return true;
    }


    return (
        <>
            <h3 className="font-bold text-3xl text-center mb-3 text-white">Login</h3>

                    <form onSubmit={handleLogin} className="animate__animated animate__fadeIn animate__faster">

                        <input  
                            type="text"
                            placeholder="Email"
                            name="email"
                            value={email}
                            className="w-full my-3 pl-2 rounded py-0.5 ring-2 transition duration-200 ease-in-out focus:outline-none focus:ring-indigo-600 "
                            autoComplete="off"
                            onChange={handleInputChange}
                        />

                        <input 
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={password}
                            className="w-full my-3 pl-2 rounded py-0.5 ring-2 transition duration-200 ease-in-out focus:outline-none focus:ring-indigo-600 "
                            onChange={handleInputChange}
                        />


                        <button
                            type="submit"
                            className="py-1 bg-gray-50 w-full my-4 rounded font-semibold"
                            disabled={loading}
                        >
                            Login
                        </button>

                        
                        <div className="grid grid-cols-4 text-white">
                            <p className='col-span-4 font-semibold text-center'>Ingreso con redes sociales</p>

                            <div 
                                className="col-span-4 flex justify-center bg-white py-1.5 my-2 px-2 rounded text-black"
                                onClick={handleGoogleLogin}
                            >
                                <div className="google-icon-wrapper">
                                    <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                                </div>
                                <p className="pl-2">
                                    <b>Sign in with google</b>
                                </p>
                            </div>


                            <div 
                                className="col-span-4 flex justify-center bg-white py-1.5 my-2 px-2 rounded text-black"
                                onClick={handleFacebookLogin}
                            >
                                <div className="google-icon-wrapper">
                                    <img className="google-icon" src="https://img.icons8.com/color/28/000000/facebook-new.png" alt="facebook button" />
                                </div>
                                <p className="pl-2">
                                    <b>Sign in with facebook</b>
                                </p>
                            </div>


                            
                            <div 
                                className="col-span-4 flex justify-center bg-white py-1.5 my-2 px-2 rounded text-black"
                                onClick={handleGithubLogin}
                            >
                                <div className="google-icon-wrapper">
                                    <img className="google-icon" src="https://img.icons8.com/ios-filled/28/000000/github.png" alt="facebook button" />
                                </div>
                                <p className="pl-2">
                                    <b>Sign in with github</b>
                                </p>
                            </div>

                        </div>

                        <div className='w-full flex justify-end text-white mt-2 font-semibold'>
                        <Link 
                            to="/auth/register"
                        >
                            Create new account    
                        </Link>

                        </div>
                       
                    </form>

          
           
        </>
    )
}
