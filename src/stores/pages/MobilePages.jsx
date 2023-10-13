import React, { useState } from 'react'
import { mobileData } from '../data/mobiles'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const MobilePages = () => {
   
  const [selectedProduct,setSelectedProduct] = useState([])

const companyHandler = (mango) =>{
  if(selectedProduct.includes(mango)){
    setSelectedProduct(selectedProduct.filter(item => item !== mango))
  }else{
    setSelectedProduct([...selectedProduct,mango])
  }

} 
   
 const filteresProduct = selectedProduct.length===0?
      mobileData : mobileData.filter((orange) => selectedProduct.includes(orange.company))


  return (
    <>
     <Navbar/>
    <div className="full-page">
   
    <div className="pro-selected">
      {
        mobileData.map((phone)=>{
          return(
            <div className='pro-input'>
              <label>
                <input type="checkbox"
                checked={selectedProduct.includes(phone.company)}
                onChange={()=>companyHandler(phone.company)}
                />

              {
                phone.company
              }
              </label>
            </div>

          )
        })
      }
    </div>
    <div className='pageSection'>
        {
          filteresProduct.map((item) =>{
            return(
              
                <div>
             <Link to={`/Mobiles/${item.id}`}>
                <div className='pageImg'>
                    <img src={item.image} alt="" />
                </div>
             </Link>
           
                <div className="proModel">
                    {item.company},{item.model}
                </div>
           
                </div> 
            )
          })  
        }
    </div>
    </div>
    </>
  )
}

export default MobilePages