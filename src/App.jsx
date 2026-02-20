import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

export default function App() {
	
	return (
		// <div className="interface bg-primary-light text-primary-dark dark:bg-primary-dark dark:text-primary-light z-10">
		<div className="interface text-primary-dark dark:text-primary-light z-10">
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</div>
	)
}
