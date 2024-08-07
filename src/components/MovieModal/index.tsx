import React, { useRef } from "react";
import styled from "styled-components";
import BASE_URL from "../../api/baseUrl";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import "./MovieModal.css";
import { MovieModalProps } from "../../interfaces/index";

function MovieModal({ movie, setModalOpen }: MovieModalProps) {
	const ref = useRef<HTMLDivElement | null>(null);
	useOnClickOutside(ref, () => {
		setModalOpen(false);
	});

	return (
		<div className="presentation">
			<div className="wrapper-modal">
				<div className="modal" ref={ref}>
					<CloseButton onClick={() => setModalOpen(false)} />
					<img
						className="modal__poster-img"
						src={`${BASE_URL}${movie.backdrop_path}`}
						alt="modal__poster-img"
					/>
					<div className="modal__content">
						<p className="modal__details">
							<span className="modal__user_perc">100% for you</span>{" "}
							{movie.release_date ? movie.release_date : movie.first_air_date}
						</p>

						<h2 className="modal__title">
							{movie.title ? movie.title : movie.name}
						</h2>
						<p className="modal__overview"> 평점: {movie.vote_average}</p>
						<p className="modal__overview"> {movie.overview}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

const CloseButton = styled.button`
	position: absolute;
	right: 20px;
	top: 20px;
	cursor: pointer;
	z-index: 1000;
	color: white;
	padding-bottom: 4px;
	background-color: rgba(0, 0, 0, 0.7);
	border: none;
	border-radius: 50%;
	width: 30px;
	height: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
	transition:
		transform 0.3s ease,
		background-color 0.3s ease;

	&:hover {
		background-color: rgba(0, 0, 0, 0.9);
	}

	&:focus {
		outline: none;
	}

	&::before {
		content: "×";
		font-size: 20px;
	}
`;

export default MovieModal;
