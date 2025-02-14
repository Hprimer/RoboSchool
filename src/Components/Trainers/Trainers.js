import React, { useState } from 'react'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import SwiperBtn from '../utils/SwiperBtn/SwiperBtn'
import PopupWindow from '../utils/popupWindow/PopupWindow'; 
import trainersList from './trainersList'

import './Trainers.css'


function Trainers() {

	const [popupActive, setPopupActive] = useState(false)
	const [selectedTrainer, setSelectedTrainer] = useState(null); // Выбранный тренер

	return (
		<section className='container ' id='trainers'>
			<div className='train_head title'>Профессиональные тренеры</div>
			<Swiper
				className='swiper'				
				// install Swiper modules
				breakpoints={{
					320:{
						slidesPerView: 2,
						spaceBetween: 0

					},
					560:{
						slidesPerView: 3,
						spaceBetween: 20

					},
					768:{
						slidesPerView: 3,
						spaceBetween: 20

					},

					1024: {
            slidesPerView: 3,
						spaceBetween: 20
            
          }
        }}
				modules={[/*Navigation, Pagination,*/ Scrollbar, A11y, ]}
				speed={400}//1000 mlsec = 1 sec
				loop={true} //бесконечное прокручивание
				// spaceBetween={30}
				slidesPerView={1}
				slidesPerGroup={1} // Перелистывание по одному слайду
				scrollbar={{ draggable: false }}

				
    	>
				{trainersList.map(el =>{ 
					return (
					<SwiperSlide key={el.id} >
						<div className='slide'>
							<img className='slide_point1' src={el.image} alt={`trainer ${el.id}`} />
							<div className='slide_point2'>{el.name}</div>
							<div className='slide_point3'>{el.specific}</div>
							<div 
								className='slide_point4' 
								onClick={() => {
									setPopupActive(true);
									setSelectedTrainer(el);
								}}
							>
								<span className='SP4_red_btn'>Подробнее</span>
							</div>
						</div>

					</SwiperSlide>
					)
				})}
				<SwiperBtn/>
				<PopupWindow active={popupActive} setActive={setPopupActive} trainer={selectedTrainer}/>


    </Swiper>

		</section>
	)
}

export default Trainers