import { React } from 'react';
import { useSwiper } from 'swiper/react';

import { GrFormNext,GrFormPrevious } from "react-icons/gr";



import './SwiperBtn.css'

export default function SwiperBtn() {
  const swiper = useSwiper();

  return (
		<div className='swiperBtn'>
    <button className='prev_btn' onClick={() => swiper.slidePrev()}><GrFormPrevious /></button>
    <button className='next_btn' onClick={() => swiper.slideNext()}><GrFormNext/></button>
		</div>
  );
}