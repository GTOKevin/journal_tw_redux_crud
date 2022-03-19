import React, { useEffect, useRef } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { activeNote, startDeleting } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {

    const dispatch=useDispatch();

   const {active:note} = useSelector(state=>state.notes);

   console.log(note);
    
   const [formValues,handleChange,reset]=useForm(note);

   const {title,body,id} = formValues;

    // console.log(id);

   const activeId = useRef(note.id);
    useEffect(() => {
        
            if(note.id !== activeId.current){
                reset(note);
                activeId.current=note.id;
            }

    }, [note,reset])
    
    useEffect(() => {
      
        dispatch(activeNote(formValues.id,{...formValues,
        url:note.url||null}));
    
    }, [formValues,dispatch,note.url])


    const handleDelete=()=>{
        dispatch(startDeleting(id));
    }

    return (
        <div className="flex flex-col h-full">
            
            <NotesAppBar />

            <div className="flex flex-col h-full py-5 px-5">

                <input 
                    type="text"
                    placeholder="Some awesome title"
                    name='title'
                    value={title}
                    className="border-none text-gray-400 text-2xl font-medium focus:outline-none"
                    autoComplete="off"
                    onChange={handleChange}
                />

                <textarea
                    placeholder="What happened today"
                    name='body'
                    className="border-none text-gray-400 text-xl flex-auto resize-none focus:outline-none"
                    value={body}
                    onChange={handleChange}
                ></textarea>

               {
                   (note.url) &&
                       <div>
                            <img 
                            className='shadow-black shadow-md h-40'
                                src={note.url}
                                alt="imagen"
                            />
                        </div>
                }

            </div>
                <button className='bg-red-600 text-white py-0.5 transition duration-300 ease-in hover:text-gray-300'
                onClick={handleDelete}>
                    Delete
                </button>
        </div>
    )
}
