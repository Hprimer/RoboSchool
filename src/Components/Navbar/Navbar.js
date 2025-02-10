import React from 'react'
import './navbar.css'


function Navbar() {
	return (
		<div className='my_navbar --nav-text row'>
			<div className='col logo'>
				<a href='#' className='col'>ROBO.SCHOOL</a>
			</div>
			<div className='col parts row'>
				<a href='#' className='col'>О школе  </a>
				<a href='#' className='col'>Тренеры  </a>  
				<a href='#' className='col'>Стоимость</a>
				<a href='#' className='col'>Запись</a>

			</div>
			<div className='col num'>
				<a href="tel:+6494461709">+7 800 800 00–00</a>
			</div>
		</div>
	)
}

export default Navbar
