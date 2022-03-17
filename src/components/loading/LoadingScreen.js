import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export const LoadingScreen = () => {
  return (
    <div className='w-screen h-screen bg-opacity-50 bg-gray-300 flex justify-center items-center'>
          
            <FontAwesomeIcon className="text-blue-600 animate-spin" icon={faSpinner} size={"4x"} />
    </div>
  )
}
