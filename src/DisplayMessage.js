import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

function replaceVars(displayLine, stateInfo){
		if (displayLine && displayLine.includes('#{')){
			let line = displayLine
			let start = displayLine.search('#{')
			let end  = displayLine.search('}')
			let var_name = line.substring(start + 2, end);
			
			line = line.split('#{' + var_name + '}').join(stateInfo[var_name])
			displayLine = var_name
			return displayLine
	} else {
	 return displayLine
	}
}

function DisplayMessage({msg, source, changeMsg, updateUserInfo, stateInfo}){
	msg.text = replaceVars(msg.text, stateInfo)

	if (msg.type === "text"){
		return (
			<p className={source} onClick={()=>{if (msg.var_type){updateUserInfo(msg.var_type,msg.text)}; changeMsg(msg.next_id, msg)}}>{ msg.text }</p>
		)
	} else if (msg.type === "gif"){
		return (
			<img className={source} onClick={()=>{if (msg.var_type){updateUserInfo(msg.var_type, msg.text)};changeMsg(msg.next_id, msg)}}src={msg.text} alt="funny GIF" width="80px"/>
		)
	} else if (msg.type === "question"){
		return (
			<form className={source} onSubmit={(e)=>{
				e.preventDefault(); 
				if (msg.var_type){
					updateUserInfo(msg.var_type, e.target[msg.var_type].value)
				}; 
				changeMsg(msg.next_id, {text: e.target[msg.var_type].value, next_id: 4, type: "text"})}}>
				<div className="input">
					<input name={msg.var_type}/>
					<button type="submit">
						<FontAwesomeIcon icon={faChevronRight}/>
					</button>
				</div>
			</form>
		)
	}
}

export default DisplayMessage;