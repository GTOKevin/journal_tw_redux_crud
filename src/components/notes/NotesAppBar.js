import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote, startUploading } from '../../actions/notes';

export const NotesAppBar = () => {

    const dispatch=useDispatch();
    
   const {active} =useSelector(state=>state.notes);

    const handleSave=()=>{
        dispatch(startSaveNote(active))
    }
    const handlePictureClick=()=>{
        document.querySelector('#fileSelector').click();
    }

    const handleFileChange=(e)=>{
        const file = e.target.files[0];
        if(file){
            dispatch(startUploading(file));
        }
    }


    return (
        <div className="items-center bg-blue-700 flex justify-between py-2.5 px-5 text-white">
            <span>28 de agosto 2020</span>

            <input
            id='fileSelector'
            type="file" className='hidden'
            onChange={handleFileChange} />

            <div>
                <button className="bg-transparent border-none text-white cursor-pointer py-2 px-2.5 focus:outline-none hover:text-gray-300"
                onClick={handlePictureClick}>
                    Picture
                </button>

                <button className="bg-transparent border-none text-white cursor-pointer py-2 px-2.5 focus:outline-none hover:text-gray-300"
                onClick={handleSave}>
                    Save
                </button>
            </div>
        </div>
    )
}
