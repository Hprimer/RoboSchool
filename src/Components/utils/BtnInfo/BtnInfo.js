import React from 'react'
import { useState, useRef, useEffect } from 'react';
import './BtnInfo.css'
function BtnInfo() {

	const [isActive, setIsActive] = useState(0);//0 - notActive, 1 - Active;
	// 																						  Отвечает за видимость блока
	const [isFixed, setIsFixed] = useState(false); // Фиксация кликом

	const btnRef1 = useRef(null); // Ссылка на текстовый блок
	const btnRef2 = useRef(null); // Ссылка на кнопку
	const btnRef3 = useRef(null); // Ссылка на всю кнопку и текст

	const toggleFixedState = () => {
		setIsFixed((prev) => !prev);
		setIsActive(true); // При клике обязательно делаем блок видимым
};

	useEffect(()=>{// Изменение стилей 
		if (isActive){
			btnRef1.current.classList.add('info_btn_text--active')
			btnRef2.current.classList.add('info_circle_hover')

		}
		else{
			btnRef1.current.classList.remove('info_btn_text--active')// удаление класса
			btnRef2.current.classList.remove('info_circle_hover')
		}
	}, [isActive])


	// Закрытие при клике вне блока
	useEffect(() => {
		const handleClickOutside = (event) => {
				if (
						btnRef3.current && // Проверяем, есть ли ref
						!btnRef3.current.contains(event.target) // Проверяем, кликнули ли вне блока
				) {
						setIsActive(false); // Скрываем блок
						setIsFixed(false); // Сбрасываем фиксацию
				}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
				document.removeEventListener("mousedown", handleClickOutside);
		};
}, []);

	return (
		<div ref={btnRef3} className='info_btn'>
			<div 
				ref={btnRef2}
				className='info_circle' 
				onClick={toggleFixedState}
				onMouseEnter={() => setIsActive(true)} 
				onMouseLeave={() => !isFixed && setIsActive(false)}
			>i</div>
			<div ref={btnRef1} className='info_btn_text'>При наличии свободных мест</div>
		</div>
	)
}

export default BtnInfo
