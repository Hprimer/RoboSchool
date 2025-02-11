// import React from 'react'
// import './After_course.css'
// import BtnInfo from '../BtnInfo/BtnInfo'

// function After_course() {
// 	return (
// 		<section className='A_c'>
// 			<div className='container '>
// 				<div className='A_c_head'>
// 				Что вы получите после курса
// 				</div>
				
// 				<div className='A_c_body '>
// 					<div className='A_c_body1 row'>
// 						<div className='col-12 col-md-4'>Удостоверение</div>
// 						<div className='col-12 col-md-4'>Знания</div>						
// 						<div className='col-12 col-md-4 with_btn'>
// 							<BtnInfo/>
// 							<div>Практику</div>							
// 						</div>	
// 					</div>
// 					<div className='A_c_body2 row'>
// 						<div className='col'>Дающее право преподавать робототехнику для детей 6-12 лет в образовательных учреждениях</div>
// 						<div className='col'>По основам разработки учебно-методических комплексов по робототехнике и программированию</div>	
// 						<div className='col'>Возможность пройти практику по преподаванию робототехники на базе R:ED LAB (в оффлайн или онлайн формате)</div>	
// 					</div>
					

// 				</div>
// 			</div>
// 		</section>
// 	)
// }

// export default After_course


import React from 'react'
import './After_course.css'
import BtnInfo from '../BtnInfo/BtnInfo'

function After_course() {
	return (
		<section className='A_c'>
			<div className='container '>
				<div className='A_c_head'>
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


						{/* <div className='col-12 col-md-4'></div>						
						<div className='col-12 col-md-4 with_btn'>						</div>	 */}
					</div>
					{/* <div className='A_c_body2 row'>
					</div> */}
					

				</div>
			</div>
		</section>
	)
}

export default After_course
