import { Route, Router, Routes } from "react-router-dom";
import Navbar from "./components/sections/Navbar";
import Home from "./components/Home";

export default function App() {
	return (
		<div className="bg-white text-blue dark:bg-blue dark:text-white">
			{/* <Navbar /> */}
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</div>
	)
}
