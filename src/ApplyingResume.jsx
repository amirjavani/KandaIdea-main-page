import React, { useEffect, useState } from 'react'

function ApplyingResume() {
  const [visible, setVisible] = useState(false);


  const scrollHandeler=()=>{
    const scrolly = window.scrollY
    console.log(scrolly)
    if(scrolly>700){
      setVisible(true)
    }

  }

  useEffect(() => {
    window.addEventListener('scroll',scrollHandeler)
    return () => {
      
    };
  }, []);
  
  return (
    <div  className={`max-h-[400] my-44 mx-auto font-DinMedium text-center ${visible?'fadeInDown visible':'invisible'}`}>
      <p className='text-[22px] md:text-[36px] '> Don't miss this opportunity<br/>
      You can handle it!</p>
      <button className='font-DinLight text-[20] mt-4 px-3 py-2 bg-[#0000ff] text-white'>APPLY RESUME</button>
    </div>
  )
}

export default ApplyingResume
