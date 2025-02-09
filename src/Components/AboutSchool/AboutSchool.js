import React from 'react'
import After_course from '../utils/After_course/After_course'
import './AboutSchool.css'

function AboutSchool() {
	return (
		<div className='aboutSchool'>
			<div className='main-info'>
			Robo School <span>– учреждение для формирования кадрового педагогического резерва в сфере робототехники и программирования</span>
			</div>
			<div className='achievements'>
				<div className='row'>
					<div className='achievements-digit col'> 10 </div>
					<div className='achievements-digit col'> 20 </div>
					<div className='achievements-digit col'> 100 </div>
					<div className='achievements-digit col'> 10 000 </div>
				</div>
				<div className='row'>
					<div className='achievements-text col'> УМК по различным направлениям по робототехнике </div>
					<div className='achievements-text col'> Школ, в которых запущена робототехника </div>
					<div className='achievements-text col'> Педагогов прошедших курсы повышения квалификации </div>
					<div className='achievements-text col'> Обученных детей на базе собственных центров </div>
				</div>
			</div>
			<After_course/>
		</div>
	)
}

export default AboutSchool
