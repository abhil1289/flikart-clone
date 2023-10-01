import React from 'react'
import {mobileData} from '../data/mobiles'

export const Mobiles = () => {

    const firstFiveImages = mobileData.slice(0,5)
  return (
   <>
   <div className="protittle">
   <h2>Mobiles</h2>

   </div>
       <div className='proSection'>
        {
           firstFiveImages.map((item)=>{
                return (
                   <div className='imageBox'>

                    <img className='proImage' src={item.image} alt="" />
                   </div>

                )


            })
        }
    </div>
   
   </>
 
  )
}
