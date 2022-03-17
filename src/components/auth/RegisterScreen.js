import validator from 'validator';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {

    const dispatch=useDispatch();
    const {msgError} = useSelector(state=>state.ui);


    const [formValues,handleChange]=useForm({name:'kevin',email:'kevin@gmail.com',password:'123456',password2:'123456'});
    const {name,email,password,password2}=formValues;
    const handleRegister=(e)=>{
        e.preventDefault();
        if(isFormValid()){
            dispatch(startRegisterWithEmailPasswordName(email,password,name));
        }
    }

    const isFormValid=()=>{

        if(name.trim().length===0){
            dispatch(setError("nombre requirido"));
            return false;
        }else if(!validator.isEmail(email)){
            dispatch(setError("email valido"));
            return false;
        }else if(password!==password2 && password.length<5){
            dispatch(setError("password requirido"));
            return false;
        }

        dispatch(removeError());

        return true;
    }

    return (
        <>
            <h3 className="font-bold text-3xl text-center mb-3 text-white">Nuevo Usuario</h3>

            {
                msgError &&
                 <div className='w-full text-center uppercase font-semibold text-white bg-red-600 py-1 rounded'>
                 <p>{msgError}</p>
                 </div>
            }
           

            <form onSubmit={handleRegister}>

                <input 
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    className="w-full my-3 pl-2 rounded py-0.5 ring-2 transition duration-200 ease-in-out focus:outline-none focus:ring-indigo-600 "
                    autoComplete="off"
                />

                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    className="w-full my-3 pl-2 rounded py-0.5 ring-2 transition duration-200 ease-in-out focus:outline-none focus:ring-indigo-600 "
                    autoComplete="off"
                />

                <input 
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    className="w-full my-3 pl-2 rounded py-0.5 ring-2 transition duration-200 ease-in-out focus:outline-none focus:ring-indigo-600 "
                />

                <input 
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    value={password2}
                    onChange={handleChange}
                    className="w-full my-3 pl-2 rounded py-0.5 ring-2 transition duration-200 ease-in-out focus:outline-none focus:ring-indigo-600 "
                />


                <button
                    type="submit"
                    className="py-1 bg-gray-50 w-full my-4 rounded font-semibold"
                >
                    Registrar
                </button>

               
                <div className='w-full flex justify-end text-white mt-2 font-semibold'>
                <Link 
                    to="/auth/login"
                    className="link"
                >
                    Ya se encuentra registrado?
                </Link> 
                </div>
               

            </form>
        </>
    )
}
