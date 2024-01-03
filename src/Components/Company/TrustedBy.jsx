import React from 'react'

import './style.css'
import image01 from './img/image01.svg'
import image02 from './img/image02.svg'
import image03 from './img/iamge03.svg'
import image04 from './img/image04.svg'
import image05 from './img/image05.svg'
import image06 from './img/image06.svg'
import image07 from './img/image07.svg'
 

function TrustedBy() {

  return (
    <div className='my-20 py-20 bg-slate-50'>
        <h3 className='text-center py-10'> Trusted by over 15,000 companies and millions of learners around the world</h3>

        <div className='d-flex justify-center items-center gap-10 py-50' > 
            <img src={image01} alt=''/>
             <img src={image03} alt=''/>

            <img src={image02} alt=''/>

            <img src={image04} alt=''/>
            <img src={image05} alt=''/>
            <img src={image06} alt=''/>
            <img src={image07} alt=''/>

        </div>
        

   {/*      {
            Data.map((d,i)=>{
                return (
                <div key={i} className='d-flex justify-center items-center'> 
                      <img src={d.img} alt='' className=''/>
                </div>
                )
            })
        } */}
          
    </div>
  )
}

export default TrustedBy