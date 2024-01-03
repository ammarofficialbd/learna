import React from 'react'
import './rcard.css'
import Thumb from './../../img/thub-02.png'
function RCard() {
  return (
    <div className='rcard d-flex flex-col w-24 box-shadow-1 px-8 py-12'>
        <div className='rcard-txt-area px-8'> 
           <img src='https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg' className='w-2'/>
           <p className='text-lg text-slate-700'>I am proud to say that after a few months of taking this course...I passed my exam and am now an AWS Certified Cloud Practitioner! This content was exactly what the CCP exam covered. </p>
        </div>
        <div className='rcard-user-area d-flex items-center px-8 pb-8 gap-1'> 
          <img src='https://th.bing.com/th/id/OIP.ZEDl5Nz-Q8W9Twj_qAWfWwHaFj?pid=ImgDet&w=474&h=355&rs=1' className='rcard-user w-3 rounded-full'/>
          <h4> Seteve Haringtone </h4>
        </div>
        <div className='border-top'> </div>
        <div className='course-name d-flex justify-start gap-1 items-center'> 
            <img src={Thumb} alt='' className='w-4 rounded-lg'/>
            <p> Learn Websites Design with HTML and CSS </p>
        </div>
    </div>
  )
}

export default RCard