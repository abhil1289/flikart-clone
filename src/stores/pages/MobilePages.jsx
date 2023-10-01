import React from 'react'
import { mobileData } from '../data/mobiles'
import Navbar from '../components/Navbar'

const MobilePages = () => {
  return (
    <>
    <Navbar/>
    <div className='pageSection'>
        {
          mobileData.map((item) =>{
            return(
                <div>
                <div className='pageImg'>
                    <img src={item.image} alt="" />
                </div>
                <div className="proModel">
                    {item.company},{item.model}
                </div>
                </div> 
            )
          })  
        }
    </div>
    </>
  )
}

export default MobilePages