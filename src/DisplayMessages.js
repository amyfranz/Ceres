import React from 'react';
import DisplayMessage from "./DisplayMessage.js"
import DisplayPrevMessage from "./DisplayPrevMessage.js"

function DisplayMessages({msgs, changeMsg, updateUserInfo, stateInfo, prevMsgs}){
	return (
		<div className="currentMessage">{
		prevMsgs.map((msg, i) => <DisplayPrevMessage msg={msg} stateInfo={stateInfo} is_last_msg={i === prevMsgs.length - 1 && msgs.source === "user" ? true : false} key={i}/>)
		}
		{
			msgs.source === "user" ?
			<div className="choices">{
				msgs.message.map(msg => 
					<DisplayMessage source={msgs.source} msg={msg} stateInfo={stateInfo} changeMsg={changeMsg} updateUserInfo={updateUserInfo}/>
				)}
				</div>

			:
				msgs.message.map(msg => {
					msg.source = "ceres";
					setTimeout(function(){changeMsg(msg.next_id, msg)}, 1000)
					return (
						<DisplayPrevMessage msg={msg} stateInfo={stateInfo} />
						)
				}
			)
		}
		</div>
	)
}

export default DisplayMessages;