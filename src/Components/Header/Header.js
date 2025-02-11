import React from 'react'
import Girl from '../utils/Girl/Girl'
import './header.css'
import './join_btn.css'


function Header() {
	return (
		<div className='headerr row'>
			<Girl/>
			<div className='logo_head'>
			ROBO SCHOOL
			</div>
			<div className='text_head'>
			Курсы повышения квалификации по робототехнике для педагогов начальной школы
			</div>
			<div className='join_btn'>
				<a href='#register'>
					Записаться на курс
				</a>
			</div>
			
			
		</div>
	)
}

export default Header
