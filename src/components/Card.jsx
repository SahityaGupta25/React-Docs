import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";

function Card() {
  return (
    <div className="overflow-hidden relative w-80 h-72 rounded-[50px] bg-zinc-600 text-white px-5 py-10">
        <FaFileAlt />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat nam repellat velit consequuntur saepe a eligendi!</p>
        <div className='footer absolute  left-0 bottom-0 w-full'>
            <div className="flex items-center py-3 justify-between px-6">

            <h5>0.6MB</h5>
            <span className='w-7 h-7'>

            <MdDownloadForOffline size="1.2em"  />
            </span>
            </div>
            <div className="tag w-full bg-sky-300 py-3">
                <h3>Download Now</h3>
            </div>
        </div>
    </div>
  )
}

export default Card