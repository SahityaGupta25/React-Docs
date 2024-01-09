import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";
import { IoCloseCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({data}) {
  return (
    <motion.div drag className="overflow-hidden relative w-80 h-72 rounded-[46px] bg-zinc-600 text-white px-5 py-10">
        <FaRegFileAlt className='h-6'/>
        <p className='pt-4 leading-none '>{data.description}</p>
        <div className='footer absolute  left-0 bottom-0 w-full'>
            <div className="flex items-center py-3 justify-between px-6">

            <h5>{data.fileSize}</h5>
            <span className='w-7 h-7'>
    
            {data.close ? <IoCloseCircleOutline /> :<MdDownloadForOffline size="1.2em"  />  }
            
            </span>
            </div>
          {
            data.tag.isOpen ? ( 
              <div className={`tag w-full ${data.tag.tagColor === "blue" ? "bg-blue-400" : "bg-green-600"} font-semibold text-s py-3 flex justify-center items-center`}>
              <h3>{data.tag.tagTitle}</h3>
          </div> ) : null 
          }
        </div>
    </motion.div>
  )
}

export default Card