import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="flex flex-col h-full">
            
            <NotesAppBar />

            <div className="flex flex-col h-full py-5 px-5">

                <input 
                    type="text"
                    placeholder="Some awesome title"
                    className="border-none text-gray-400 text-2xl font-medium focus:outline-none"
                    autoComplete="off"
                />

                <textarea
                    placeholder="What happened today"
                    className="border-none text-gray-400 text-xl flex-auto resize-none focus:outline-none"
                ></textarea>

                <div>
                    <img 
                    className='shadow-black shadow-md h-40'
                        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
                        alt="imagen"
                    />
                </div>


            </div>

        </div>
    )
}
