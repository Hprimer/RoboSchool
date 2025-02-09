import React from 'react'
import './popupWindow.css'

function PopupWindow({ active, setActive}) {
	return (
		<div className={active ? "popup popup--active" : "popup"} onClick={() => setActive(false)}>
			<div className='popup_content' onClick={(e) => e.stopPropagation()}>кеке</div>
		</div>
	)
}

export default PopupWindow
