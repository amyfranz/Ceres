import React from 'react';
import './App.css';
import Chat from "./chat.js";
import DisplayMessages from "./DisplayMessages.js";
import Header from "./Header.js"
import Footer from "./Footer.js"


class App extends React.Component {
  constructor(props) {
    super(props);
    	this.state = {currentMsg: Chat.find(c => c.id === 1), prevMsgs: [], name: "", location: "", gender:"", age: "", diet: "", house_type: "", num_of_people: "" ,has_outdoor_area: "", rent_or_own: "",profession: "",work_location:"", has_children: "", has_pets: "", exercise_amount:"", going_out:"", selected: "chat"
			}
  }
	render() {
		let changeMsg=(next_id, msg)=>{
			let newMsg = msg
			newMsg.source = this.state.currentMsg.source
			this.setState({currentMsg: Chat.find(c => c.id === next_id), prevMsgs: [...this.state.prevMsgs, newMsg]})
		}

		let updateUserInfo=(var_name, var_value)=>{
			this.setState({[var_name]: var_value})
		}
		let changeIcon = (selected) => {
			this.setState({selected: selected})
		}
		if (this.state.selected === "chat"){
			
			return (
				<div className="App">
					<Header/>
					<DisplayMessages className="currentMessage" msgs={this.state.currentMsg} updateUserInfo={updateUserInfo}changeMsg={changeMsg} stateInfo={this.state} prevMsgs={this.state.prevMsgs}/>
					<Footer selected={this.state.selected} changeIcon={changeIcon}/>
				</div>
		);
		} else if (this.state.selected === "home"){
			return (
				<div className="App">
					<img src="/assets/home_image.png" alt="homeImg" className="homeImg" />
					<Footer selected={this.state.selected} changeIcon={changeIcon}/>
				</div>
		);
		}

	}
}

export default App;
