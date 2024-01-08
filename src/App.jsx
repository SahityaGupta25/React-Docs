// import React, { useState } from 'react'
// import Products from './Products'

// function App({data}) {
//   let [a,b] = useState(65)
//   return (
//     <>
// <div className='w-full h-64 bg-zinc-600'>App</div>
// <Products data='66'/>
// <h1>{a}</h1>
// <button className='rounded-md w-16 h-14 bg-orange-400' onClick={()=>b(a+1)}>Click Me!</button>
//     </>
    
//   )
// }

// export default App

import React from 'react'
import Background from './components/background'
import Foreground from './components/Foreground'

function App() {
  return (
    <div className='relative w-full h-screen bg-zinc-800 '>
     <Background/>
     <Foreground/>
    </div>
  )
}

export default App