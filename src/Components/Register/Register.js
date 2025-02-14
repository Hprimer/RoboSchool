import React from 'react'
        
import './Register.css'
import PhoneInput from '../utils/PhoneInput/PhoneInput'


function Register() {
	return (
		<section className='register-block' id='register'>
			<div className='row reg_content'>
				<div className="col-12 col-md-6 reg_text">
					<span className='reg_text1'>Запишитесь на курс со скидкой 10%</span>
					<p className='reg_text2'>Акция действительна до 10 марта 2022 года</p>
				</div>
				<div className="col-12 col-md-6 reg_form">
					<div class="mb-3">
						<input type="text"	className="form-control" 	placeholder="Имя"/>
					</div>
					<div class="mb-3">
						<PhoneInput/>
					</div>
					<div class="mb-3">
						<input type="email"	className="form-control" 	placeholder="E-mail"/>
					</div>
					<div className='form_btn'>Оформить заявкy</div>
					
				</div>
				

					
				
			</div>
		</section>
	)
}

export default Register
