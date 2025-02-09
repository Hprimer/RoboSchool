import React from 'react'
import './After_course.css'
import BtnInfo from '../utils/BtnInfo/BtnInfo'

function After_course() {
	return (
		<div className='A_c'>
			<div className='A_c_head'>
			Что вы получите после курса
			</div>
			<BtnInfo/>
			<div className='A_c_body '>
				<div className='A_c_body1 row'>
					<div className='col'>Удостоверение</div>
					<div className='col'>Знания</div>						
					<div className='col'>
						<div>Практику</div>
					</div>	
				</div>
				<div className='A_c_body2 row'>
					<div className='col'>Дающее право преподавать робототехнику для детей 6-12 лет в образовательных учреждениях</div>
					<div className='col'>По основам разработки учебно-методических комплексов по робототехнике и программированию</div>	
					<div className='col'>Возможность пройти практику по преподаванию робототехники на базе R:ED LAB (в оффлайн или онлайн формате)</div>	
				</div>
				

			</div>
			
		</div>
	)
}

export default After_course
