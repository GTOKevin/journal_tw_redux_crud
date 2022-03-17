import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';

export const AuthRouter = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center bg-blue-600">
            <div className="bg-blue-500 px-8 py-10 rounded md:w-2/4 xl:w-1/4-container 2xl:w-2/5">
                <Routes>
                    <Route 
                        path="login"
                        element={ <LoginScreen /> }
                    />

                    <Route 
                        path="register"
                        element={ <RegisterScreen/> }
                    />

                    {/* <Route path='*' element={<LoginScreen />} /> */}


                </Routes>
            </div>

        </div>
    )
}
