import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages";
import { Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Menu from "./pages/menu";
import Contact from "./pages/contact";
import Dropdown from "./components/Dropdown";

function App() {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		const hideMenu = () => {
			if (window.innerWidth > 768 && isOpen) {
				setIsOpen(false);
			}
		};
		window.addEventListener("resize", hideMenu);
		return () => {
			window.addEventListener("resize", hideMenu);
		};
	});

	return (
		<>
			<Navbar toggle={toggle} />
			<Dropdown isOpen={isOpen} toggle={toggle} />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/menu' element={<Menu />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
