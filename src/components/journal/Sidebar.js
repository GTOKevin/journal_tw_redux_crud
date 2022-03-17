import React from 'react'
import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom';
import { startLogout } from '../../actions/auth';
import { JournalEntries } from './JournalEntries'

export const Sidebar = () => {

   const dispatch = useDispatch();

   const handleLogout=()=>{
       dispatch(startLogout());
        <Navigate to="/auth/login" /> 
   }

    return (
        <aside className="bg-slate-800 text-white flex flex-col h-screen px-3" style={{width:'400px'}}>
            
            <div className="flex justify-between">
                <h3 className="mt-5 font-light">
                    <i className="far fa-moon"></i>
                    <span> Fernando</span>
                </h3>

                <button className="btn" onClick={handleLogout}>
                    Logout
                </button>
            </div>

            <div className="items-center cursor-pointer flex justify-center mt-8 w-full flex-col transition duration-300 ease-in-out hover:text-gray-400">
                <i className="far fa-calendar-plus fa-5x"></i>
                <p className="mt-5">
                    New entry
                </p>
            </div>

            <JournalEntries />    

        </aside>
    )
}
