import React, { useState, useEffect, ChangeEvent } from "react";
import "./Nav.css";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.png";

export default function Nav() {
	const [show, setShow] = useState<boolean>(false);
	const [searchValue, setSearchValue] = useState<string>(""); // 검색 내용
	const navigate = useNavigate(); // 페이지 이동시 사용

	useEffect(() => {
		// addEventListener
		window.addEventListener("scroll", () => {
			if (window.scrollY > 50) {
				setShow(true);
			} else {
				setShow(false);
			}
		});

		return () => {
			// removeEventListener
			window.removeEventListener("scroll", () => {});
		};
	}, []);

	/**
	 * 로고 클릭시 작동 함수
	 */
	const handleLogoClick = (): void => {
		setSearchValue("");
		navigate("/pop-film");	
	};

	/**
	 * 검색어 변경시 작동 함수
	 * @param e
	 */
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value); // 검색어 내용 변경
		navigate(`search?q=${e.target.value}`);
	};

	return (
		// show가 true이면 class에 nav__black 추가
		<nav className={`nav ${show && "nav__black"}`}>
			<img
				alt="PopFilm logo"
				src={logo}
				className="nav__logo"
				onClick={handleLogoClick}
			/>
			<input
				value={searchValue}
				onChange={handleChange}
				className="nav__input"
				placeholder="영화를 검색해주세요."
			/>
			<img
				alt="User logged"
				src="https://occ-0-4796-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41"
				className="nav__avatar"
			/>
		</nav>
	);
}
