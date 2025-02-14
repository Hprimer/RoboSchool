import React, { useEffect, useRef, useState } from 'react'

import { LuPhone } from "react-icons/lu";
import './navbar.css'

function Navbar() {

	const [isOpen,setIsOpen] = useState(false);
	const btnRef = useRef(null)

	const toggleMenuBtn = () => {
		setIsOpen((prev) => !prev);
 };
	
	return (
		<div className="my_navbar --nav-text">
			<div className=" container ">
				<div className='row nav_items'>
					<div className="col logo">
						<a href="#" className="col">ROBO.SCHOOL</a>
					</div>
					<a href="tel:+78008000000" className='phone_btn'>
						<LuPhone size={40}/>
					</a>
					
					<div className='menu_btn' onClick={toggleMenuBtn}>
						<span className='bar'></span>
						<span className='bar'></span>
						<span className='bar'></span>
					</div>
					<div className={`col nav_links row ${isOpen ? "active" : ""}`}>
						<a href="#aboutschool" className="col ">О школе</a>
						<a href="#trainers" className="col ">Тренеры</a>  
						<a href="#prices" className="col ">Стоимость</a>
					</div>
					<div className={`col nav_num ${isOpen ? 'active' : ''}`}>
						<a href="tel:+78008000000">+7 800 800 00-00</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
