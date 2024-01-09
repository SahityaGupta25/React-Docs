import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";

function Card({data}) {
  return (
    <div className="overflow-hidden relative w-80 h-72 rounded-[46px] bg-zinc-600 text-white px-5 py-10">
        <FaRegFileAlt className='h-6'/>
        <p className='pt-4 leading-none'>{data.description}</p>
        <div className='footer absolute  left-0 bottom-0 w-full'>
            <div className="flex items-center py-3 justify-between px-6">

            <h5>0.6MB</h5>
            <span className='w-7 h-7'>

            <MdDownloadForOffline size="1.2em"  />
            </span>
            </div>
            <div className="tag w-full bg-green-600 font-semibold text-s py-3 flex justify-center items-center">
                <h3>Download Now</h3>
            </div>
        </div>
    </div>
  )
}

export default Card