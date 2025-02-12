import React from 'react'
import './Footer.css'

function Footer() {
	return (
		<div className='footer '>
			<div className='container '>
				<div className=' row'>
					<div className=' col-12 col-md-6 footer_text'>
						<span className='footer_t1'>ROBO.SCHOOL</span>
						<p className='foter_t2'>© ROBO.SCHOOL</p>
					</div>
					<div className='col-12 col-md-6 foot_number'><a href="tel:+7800800000">+7 800 800 00-00</a></div>
				</div>
			</div>
		</div>
	)
}

export default Footer
