import React from "react";
import { Outlet, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage/index";
import SearchPage from "./pages/SearchPage/index";
import DetailPage from "./pages/DetailPage/index";

const basePath = process.env.REACT_APP_BASE_PATH || "/pop-film";

function Layout() {
	return (
		<div>
			<Nav />

			<Outlet />

			<Footer />
		</div>
	);
}

function App() {
	return (
		<div className="app">
			<Routes>
				<Route path={basePath} element={<Layout />}>
					<Route index element={<MainPage />} />
					<Route path=":movieId" element={<DetailPage />} />
					<Route path="search" element={<SearchPage />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
