import React from 'react'
import { menData } from '../data/men'

const Men = () => {
    const firstFiveImages = menData.slice(0,5)
  return (
    <>
    <div className="protittle">
    <h2>Men Clothing</h2>
    
    </div>
    <div className='proSection'>
            {
                firstFiveImages.map((item)=>{
                    return(
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

export default Men