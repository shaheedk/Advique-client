import {useContext} from 'react'
import { AppContext } from '../../contexts/AppContext';
const Heading = () => {
  const {user} =useContext(AppContext);
  return (
    <div className="max-w-[900px] mx-auto px-6 pt-12 text-white">
        <div className=" text-4xl md:text-5xl font-medium">
        <p>
          {user ?
           (<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#301370]">
            Hello,{user.name}
          </span>
           ):(

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#301370]">
            Hello,user
          </span> 
           )}
          
        </p>
        <p className="text-gray-300 mt-1">How Can I help you today</p>
      </div>
      </div>

  )
}

export default Heading
