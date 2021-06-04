import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home.js";
import Galleries from "./pages/Galleries.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import { NavLink } from "react-router-dom";

import HongKong from "./pages/galleries/HK.js";
import Singapore from "./pages/galleries/SG.js";
import Brunei from "./pages/galleries/BN.js";

import upload from "./pages/adminupload.js";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<div className="navBar">
					<NavLink to="/" exact className="title fahkwang">
						ANDY LAI PHOTOGRAPHY
					</NavLink>
					<div className="navLink">
						<NavLink to="/" exact activeClassName="selected">
							Home
						</NavLink>
						<NavLink to="/galleries" exact activeClassName="selected">
							Galleries
						</NavLink>
						<NavLink to="/about" exact activeClassName="selected">
							About
						</NavLink>
						<NavLink to="/contact" exact activeClassName="selected">
							Contact
						</NavLink>
					</div>
				</div>
				<Switch>
					<Route component={Home} path="/" exact />
					<Route component={Galleries} path="/galleries" exact />
					<Route component={About} path="/about" exact />
					<Route component={Contact} path="/contact" exact />
					{/* Apparently EVERY part of your routing activity should just reside here.. */}
					<Route component={HongKong} path="/hongkong" exact />
					<Route component={Singapore} path="/singapore" exact />
					<Route component={Brunei} path="/brunei" exact />
					<Route component={upload} path="/adminupload" exact />
				</Switch>
			</BrowserRouter>

			<div className="footer">
				<div className="fContainer">
					<div className="icons">
						<a href="https://www.linkedin.com/in/laijianshin/" target="_blank">
							<img src="/socialicons/linkedin.png" />
						</a>
						<a href="https://www.instagram.com/lai9879/" target="_blank">
							<img src="/socialicons/instagram.png" />
						</a>
						<a href="https://github.com/AndyPhoenix9879" target="_blank">
							<img src="/socialicons/github.png" />
						</a>
					</div>
				</div>
				<div>
					Hong Kong | +852 69939498 |{" "}
					<a href="mailto:andylaijs@gmail.com">andylaijs@gmail.com</a>
				</div>
				<div className="subheader">
					Andy Lai Photography. All rights reserved © 2021.
				</div>
			</div>
		</div>
	);
}

export default App;
