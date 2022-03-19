import React from 'react';
import { Sidebar } from './Sidebar';
import { NoteScreen } from '../notes/NoteScreen';
import { useSelector } from 'react-redux';
import { NothingSelected } from './NothingSelected';
// import { NothingSelected } from './NothingSelected';


export const JournalScreen = () => {

  const {active}=useSelector(state=>state.notes);

    return (
        <div className="flex animate__animated animate__fadeInLeft animate__faster">
            
            <Sidebar />


            <main className='w-full'>
                {
                    (active)
                    ?<NoteScreen  />
                    :<NothingSelected />
                }
            

            </main>


        </div>
    )
}
