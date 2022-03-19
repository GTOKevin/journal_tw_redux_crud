import moment from 'moment';
import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notes';

export const JournalEntry = (note) => {
    
    const {id,date,title,body,url}=note;
    const dispatch=useDispatch();

    const noteDate=moment(date);

    const handleEntryClick=()=>{
        dispatch(activeNote(id,note))
    }

    return (
        <div className="bg-white rounded text-gray-500 flex mb-2 overflow-hidden cursor-pointer animate__animated animate__fadeInLeft animate__faster"
        onClick={handleEntryClick} >
            
           {
            url &&
            <div 
                className="h-24 w-20"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: `url(${url})`
                }}
            ></div>}

            <div className="p-3">
                <p className="text-sm font-bold">
                   {title}
                </p>
                <p className="text-xs">
                {body}
                 </p>
            </div>

            <div className="items-center flex flex-col justify-center p-1 text-xs">
                <span>{noteDate.format('dddd')}</span>
                <h4>{noteDate.format('Do')}</h4>
            </div>

        </div>
    )
}
