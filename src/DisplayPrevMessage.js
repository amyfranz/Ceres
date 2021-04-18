import React from 'react';

function DisplayPrevMessage({msg, stateInfo, is_last_msg}){

	function replaceVars(displayLine, stateInfo){
		if (displayLine && displayLine.includes('#{')){
			let line = displayLine
			let start = displayLine.search('#{')
			let end  = displayLine.search('}')
			let var_name = line.substring(start + 2, end);
			
			line = line.split('#{' + var_name + '}').join(stateInfo[var_name])
			displayLine = line
			return displayLine
	} else {
	 return displayLine
	}
}

	if (msg.type === "text"){
		msg.text = replaceVars(msg.text, stateInfo)
		return (
			<p className={"prevMsg "+ msg.source + " " + (is_last_msg? "is_last_msg" : "")}>{ msg.text }</p>
		)
	} else if (msg.type === "gif"){
		return (
			<img src={msg.text} alt="funny GIF" width="80px" className={"prevMsg "+ msg.source + " " + (is_last_msg? "is_last_msg" : "")}/>
		)
	}
}

export default DisplayPrevMessage;