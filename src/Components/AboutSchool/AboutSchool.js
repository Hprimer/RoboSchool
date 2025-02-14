import React from 'react'
import './AboutSchool.css'

function AboutSchool() {
	return (
		<section className='aboutSchool container' id='aboutschool'>
			<div className='main-info'>
			Robo School <span>– учреждение для формирования кадрового педагогического резерва в сфере робототехники и программирования</span>
			</div>
			<div className='achievements row'>
				<div className='col-12 col-md-6 col-xl-3'>
					<div className='achievements-digit row'> 10 </div>
					<div className='achievements-text row'> УМК по различным направлениям по робототехнике </div>
				</div>
				<div className='col-12 col-md-6 col-xl-3'>
					<div className='achievements-digit row'> 20 </div>
					<div className='achievements-text row'> Школ, в которых запущена робототехника </div>
				</div>				
				<div className='col-12 col-md-6 col-xl-3'>
					<div className='achievements-digit row'> 100 </div>
					<div className='achievements-text row'> Педагогов прошедших курсы повышения квалификации </div>
				</div>				
				<div className='col-12 col-md-6 col-xl-3'>
					<div className='achievements-digit row'> 10 000 </div>
					<div className='achievements-text row'> Обученных детей на базе собственных центров </div>
				</div>


				

			</div>
		</section>
	)
}

export default AboutSchool
