import React from 'react'

import girl from './../../../imgs/girl.png'
import './girl.css'


function Girl() {
	return (
		<div className='girl_block'>
			<div className='girl'>
				<img className='girl_img' src= {girl} alt='girl'></img>
				<div className='circle-1'></div> 
			</div>
		</div>
	)
}

export default Girl
