import Page2 from "../Pages/Page2";
import render from "react";
import "../Styles/Loginpage.css";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect,
	useHistory,
} from "react-router-dom";
import { useState } from "react";

function Loginpage() {
	var hel = {};
	const [username, setusername] = useState("");
	const [password, setpassword] = useState("");
	const history = useHistory();

	const routeChange = () => {
		if (username == "abc" && password == "123") {
			let path = `/page2`;
			history.push(path);
		} else {
			window.open(
				"https://pbs.twimg.com/media/EanLsvxU8AEboC2.jpg",
				"targetWindow",
				"toolbar=no, location=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=400px, height=300px, top=25px left=120px"
			);
			return false;
		}
	};
	return (
		<div className="loginbody">
			<div className="login-form">
				<form>
					<input
						placeholder="Username"
						value={username}
						type="text"
						id="username"
						onChange={(event) => setusername(event.target.value)}
					/>
					<br />
					<input
						placeholder="Password"
						value={password}
						type="text"
						id="paswrd"
						onChange={(event) => setpassword(event.target.value)}
					/>
					<br />

					<button type="Submit" id="lgbtn" onClick={routeChange}>
						Login
					</button>
				</form>
			</div>
		</div>
	);
}

export default Loginpage;
