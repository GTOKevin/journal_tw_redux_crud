import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="bg-white rounded text-gray-500 flex mb-2 overflow-hidden cursor-pointer">
            
            <div 
                className="h-24 w-20"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://earthsky.org/upl/2018/12/comet-wirtanen-Jack-Fusco-dec-2018-Anza-Borrego-desert-CA-e1544613895713.jpg)'
                }}
            ></div>

            <div className="p-3">
                <p className="text-sm font-bold">
                    Un nuevo día
                </p>
                <p className="text-xs">
                    Reprehenderit id in duis consectetur deserunt veniam fugiat.
                </p>
            </div>

            <div className="items-center flex flex-col justify-center p-1 text-xs">
                <span>Monday</span>
                <h4>28</h4>
            </div>

        </div>
    )
}
