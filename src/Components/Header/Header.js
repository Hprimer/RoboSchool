import React from 'react'

import girl from './../../imgs/full_girl.png'
import './header.css'
import './join_btn.css'


function Header() {
	return (
		<div className='headerr '>
			<div className='container'>
				<div className='row'>
					<div className='col-12 col-lg-6'>
						<div className='block'>
							<div className='logo_head'>
							ROBO SCHOOL
							</div>
							<div className='text_head'>
							Курсы повышения квалификации по робототехнике для педагогов начальной школы
							</div>
							<div className='join_btn btn-desktop' onClick={() => document.getElementById("register").scrollIntoView({ behavior: "smooth" })}>								
							Записаться на курс								
							</div>
						</div>
					</div>
					<div className='col-12 col-lg-6'>
						<div className='girl'>
							<img  className='img_grl' src={girl} alt='girl_logotyp'></img>
						</div>
						
						<div className='join_btn btn-mobile' onClick={() => document.getElementById("register").scrollIntoView({ behavior: "smooth" })}>
								Записаться на курс	
						</div>
					</div>
						
				</div>
			</div>
		</div>
	)
}

export default Header
