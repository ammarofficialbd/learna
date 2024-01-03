import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import img01 from './../../img/one.jpg'
import img02 from './../../img/two.jpg'
import img03 from './../../img/one.jpg'
import img04 from './../../img/ban03.jpg'




// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './slider.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
            <img src={img01}/>
        </SwiperSlide>
        <SwiperSlide><img src={img02}/></SwiperSlide>
        <SwiperSlide><img src={img03}/></SwiperSlide>
        <SwiperSlide><img src={img04}/></SwiperSlide>
 
      </Swiper>
    </>
  );
}
