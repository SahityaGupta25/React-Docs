import React, { useState } from 'react'
import Card from './Card'


function Foreground() {
    const data =[
        {
            description:"Grand Theft Auto V for PC features a range of major visual and technical upgrades to make Los Santos and Blaine County more immersive than ever.",
            filesize:"98.66GB",
            close:false,
            tagdetails:{isOpen:true,tagTitle:"Download Now",tagColor:"green"}
        }
    ]
    useState()

  return (
    <>
     <div className="fixed z-[3] left-0 top-0 w-full h-full ">
        {data.map((item,index)=>(
            <Card data={item}/>
        ))}
       
        
     </div>

    </>
  )
}

export default Foreground