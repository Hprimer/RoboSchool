import React from 'react'
import './Prices.css'


function Prices() {
	return (
		<section className=' prices ' id='prices'>
			<div className='container'>
				<div className='prices_head title'>Выберите нужный пакет</div>
				<div className='row cards'>
					<div className='col-3 price_card '>
						<div className='card_head '>– PRO –</div>
						<div className='card_price '>20.000 ₽</div>
						<div className='card_info '>УМК по робототетхнике и программированию</div>
						<div className='card_btn '>Оставить заявку</div>	
					</div>		
					<div className='col-3 price_card '>
						<div className='card_head '>– ROBO –</div>
						<div className='card_price '>15.000 ₽</div>
						<div className='card_info '>УМК по робототетхнике</div>
						<div className='card_btn '>Оставить заявку</div>	
					</div>
					<div className='col-3 price_card '>
						<div className='card_head '>– PROG –</div>
						<div className='card_price '>10.000 ₽</div>
						<div className='card_info '>УМК по программированию</div>
						<div className='card_btn '>Оставить заявку</div>	
					</div>		
				</div>
			</div>

		</section>
	)
}

export default Prices
