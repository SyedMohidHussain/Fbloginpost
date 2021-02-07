import "./App.css";
import Loginpage from "./Components/Loginpage";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Page2 from "./Pages/Page2";
function App() {
	return (
		<div className="App">
			<Loginpage />
			<Router>
				<Switch>
					{/* <Route path="/" exact component={Loginpage} /> */}
					<Route path="/page2" exact component={Page2} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
