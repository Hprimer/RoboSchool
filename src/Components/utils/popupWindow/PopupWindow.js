import React, { useState } from 'react'
import { SiVk } from "react-icons/si";
import { FaTelegram } from "react-icons/fa";
import './popupWindow.css'

function PopupWindow({ active, setActive, trainer}) {
	const [activeTab, setActiveTab] = useState("education"); // По умолчанию показываем "Образование"


	if (!trainer) return null; // Если тренер не выбран — не рендерим окно


	const renderContent = () => {
		switch (activeTab) {
			case "education":
				// return <p>{trainer.education}</p>;
				return trainer.education.map((el, index) => (
					<p key={index}>{el}</p>
				))

			case "experience":
				return <p>{trainer.experience}</p>;
			case "awards":
				return <p>{trainer.awards}</p>;
			default:
				return null;
		}
	};

	return (
		<div className={active ? "popup popup--active" : "popup"} onClick={() => setActive(false)}>
			<div className='popup_content ' onClick={(e) => e.stopPropagation()}>
				<div className='close_btn row' onClick={() => setActive(false)}>Закрыть</div>
				<div className='row'>
					<img className='col-3 popup_img' src={trainer.image} alt={`trainer ${trainer.id}`}></img>
					<div className='trainer-info col-6'>
						<p className='name'>{trainer.name}</p>
						<p className='specific'>{trainer.specific}</p>
						<a href='https://vk.com' className='socialWebs' target="_blank" rel="noreferrer"><SiVk size={30}/></a>
						<a href='https://t.me' className='socialWebs' target="_blank" rel="noreferrer"><FaTelegram size={30}/></a>
						
					</div>
				</div>

				<div className='popup_pgs'>
					<div className='row'>
						<div className={`col popup_pgs_header ${activeTab === "education" ? "active" : ""}`} onClick={() => setActiveTab("education")}>Образование</div>
						<div className={`col popup_pgs_header ${activeTab === "experience" ? "active" : ""}`} onClick={() => setActiveTab("experience")}>Опыт работы</div>
						<div className={`col popup_pgs_header ${activeTab === "awards" ? "active" : ""}`} onClick={() => setActiveTab("awards")}>Награды</div>
					</div>
					{/* <div className='row unline' */}
					<div className="popup_pgs_text row">
						{renderContent()}
					</div>
				
				</div>


			</div>
		</div>
	)
}

export default PopupWindow
