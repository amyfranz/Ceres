import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faShoppingCart, faCommentAlt, faCog } from '@fortawesome/free-solid-svg-icons'

function Footer({selected, changeIcon}){
	return(
		<div className="footer">
			<FontAwesomeIcon icon={faHome} className={"fontAwesome " + (selected === "home" ?"selected": "")} onClick={()=>changeIcon("home")}/>
			<FontAwesomeIcon icon={faShoppingCart}className="fontAwesome" onClick={()=>changeIcon("home")}/>
			<FontAwesomeIcon icon={faCommentAlt}className={"fontAwesome " + (selected === "chat" ?"selected": "")} onClick={()=>changeIcon("chat")}/>
			<FontAwesomeIcon icon={faCog}className="fontAwesome" onClick={()=>changeIcon("home")}/>
		</div>
	)
}

export default Footer