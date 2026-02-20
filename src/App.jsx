import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import React from "react"
import { useState } from "react"
import Experience from "./components/webgl/Experience.jsx"

export const ThemeContext = React.createContext();

export default function App() {
	const [darkTheme, setDarkTheme] = useState(() => localStorage.theme === "dark")

	function toggleTheme() {
		setDarkTheme(prevDarkTheme => !prevDarkTheme)
	}

	return (
		<ThemeContext.Provider value={{darkTheme, toggleTheme}}>

			<Experience />

			<div className={`interface z-10 ${darkTheme ? 'text-primary-light' : 'text-primary-dark'}`}>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</div>

		</ThemeContext.Provider>
	)
}
