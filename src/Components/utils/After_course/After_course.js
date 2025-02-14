import React from 'react'

import './After_course.css'
import BtnInfo from '../BtnInfo/BtnInfo'


function After_course() {
	return (
		<section className='A_c'>
			<div className='container '>
				<div className='A_c_head title'>
				Что вы получите после курса
				</div>
				
				<div className='A_c_body '>
					<div className=' row'>						
						<div className='col-12 col-lg-4'>
							<div className='row A_c_body1'>Удостоверение</div>
							<div className='row A_c_body2'>Дающее право преподавать робототехнику для детей 6-12 лет в образовательных учреждениях</div>
						</div>
						<div className='col-12 col-lg-4'>
							<div className='row A_c_body1'>Знания</div>
							<div className='row A_c_body2'>По основам разработки учебно-методических комплексов по робототехнике и программированию</div>	
						</div>
						<div className='col-12 col-lg-4'>
							<div className='row  A_c_body1'>
								<span className='with_btn'>Практику <BtnInfo/></span>
								
												
							</div>
							<div className='A_c_body2 row'>Возможность пройти практику по преподаванию робототехники на базе R:ED LAB (в оффлайн или онлайн формате)</div>	
						</div>
					</div>				
				</div>
			</div>
		</section>
	)
}

export default After_course
