import React from 'react'
import './main.css'
import AboutSchool from '../AboutSchool/AboutSchool'
import Trainers from '../Trainers/Trainers'
import Prices from '../Prices/Prices'
import Register from '../Register/Register'
import Footer from '../Footer/Footer'
import After_course from '../utils/After_course/After_course'

function Main() {
	return (
		<div className='main '>
			<AboutSchool/>
			<After_course/>

			<Trainers/>
			<Prices/>
			<Register/>


		</div>
	)
}

export default Main
