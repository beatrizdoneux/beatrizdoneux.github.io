import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

export default function App() {
	return (
		<div className="bg-primary-light text-primary-dark dark:bg-primary-dark dark:text-primary-light">
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</div>
	)
}
