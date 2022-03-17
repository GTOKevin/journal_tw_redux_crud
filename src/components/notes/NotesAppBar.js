import React from 'react'

export const NotesAppBar = () => {
    return (
        <div className="items-center bg-blue-700 flex justify-between py-2.5 px-5 text-white">
            <span>28 de agosto 2020</span>

            <div>
                <button className="bg-transparent border-none text-white cursor-pointer py-2 px-2.5 focus:outline-none hover:text-gray-300">
                    Picture
                </button>

                <button className="bg-transparent border-none text-white cursor-pointer py-2 px-2.5 focus:outline-none hover:text-gray-300">
                    Save
                </button>
            </div>
        </div>
    )
}
