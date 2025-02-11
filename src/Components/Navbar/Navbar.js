import React from 'react'
import './navbar.css'


function Navbar() {
	return (
		<div className='navbar my_navbar --nav-text row'>
			<div className='col logo'>
				<a href='#' className='col'>ROBO.SCHOOL</a>
			</div>
			<div className='col parts row'>
				<a href='#aboutschool' className='col'>О школе  </a>
				<a href='#trainers' className='col'>Тренеры  </a>  
				<a href='#prices' className='col'>Стоимость</a>


			</div>
			<div className='col num'>
				<a href="tel:+78008000000">+7 800 800 00-00</a>
			</div>
		</div>
	)
}

export default Navbar
