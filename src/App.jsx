import { Route, Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Home from "./components/Home";
import DarkModeToggle from "./components/helpers/DarkModeToggle";

export default function App() {
	return (
		<div className="bg-white text-blue dark:bg-blue dark:text-white">
			<Navbar />
			<Routes>
				{/* <Route path="/" element={<Home />} /> */}
			</Routes>
			<DarkModeToggle />
		</div>
	)
}
