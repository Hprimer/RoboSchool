import React from 'react'
import './main.css'
import After_course from '../After_course/After_course'
import AboutSchool from '../AboutSchool/AboutSchool'
import Trainers from '../Trainers/Trainers'
import Prices from '../Prices/Prices'

function Main() {
	return (
		<div className='main '>
			<AboutSchool/>
			<Trainers/>
			<Prices/>


		</div>
	)
}

export default Main
