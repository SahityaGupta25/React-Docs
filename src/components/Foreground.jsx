import React, { useState } from 'react'
import Card from './Card'


function Foreground() {

  
    const data =[
        {
            description:"Grand Theft Auto V for PC features a range of major visual and technical upgrades to make Los Santos and Blaine County more immersive than ever.",
            fileSize:"98.66GB",
            close:false,
            tag:{isOpen:true,tagTitle:"Download Now",tagColor:"green"}
        },
        {
            description:"The game is based around tuning cars for street races, resuming the Need for Speed Underground storyline. Need for Speed Underground 2 provides several new features, such as a broader customization, new methods of selecting races.",
            fileSize:"12.93GB",
            close:false,
            tag:{isOpen:true,tagTitle:"Download Now",tagColor:"green"}
        },
        {
            description:"The world of illegal racing on the streets at night.",
            fileSize:"36.25GB",
            close:false,
            tag:{isOpen:true,tagTitle:"Download Now",tagColor:"green"}
        }
      
    ]
    useState()

  return (
    <>
     <div className="fixed z-[3] left-0 top-0 w-full h-full flex gap-6 flex-wrap p-5">
        {data.map((item,index)=>(
            <Card data={item}   />
        ))}
       
        
     </div>

    </>
  )
}

export default Foreground