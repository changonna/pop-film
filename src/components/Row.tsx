import React, { useEffect, useState } from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "../api/axios";
import "./Row.css";
import MovieModal from "./MovieModal";
import BASE_URL from "../api/baseUrl";
import { Movie, RowProps } from "../interfaces";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Row({ title, isLargeRow, id, fetchUrl }: RowProps) {
	const [movies, setMovies] = useState<Movie[]>([]);
	const [modalOpen, setModalOpen] = useState<boolean>(false);
	const [movieSelected, setMovieSelected] = useState<Movie>({ id: 0 });

	useEffect(() => {
		fetchMovieData();
	}, []);

	const fetchMovieData = async (): Promise<void> => {
		const request = await axios.get(fetchUrl);
		setMovies(request.data.results);
	};

	// 영화 클릭시(자세히 보기)
	const handleClick = (movie: Movie): void => {
		setModalOpen(true);
		setMovieSelected(movie);
	};

	return (
		<section className="row">
			{/** TITLE */}
			<h2>{title}</h2>
			<Swiper
				// install Swiper modules
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				navigation
				pagination={{ clickable: true }}
				loop
				breakpoints={{
					1378: {
						slidesPerView: 6,
						slidesPerGroup: 6,
					},
					998: {
						slidesPerView: 5,
						slidesPerGroup: 5,
					},
					625: {
						slidesPerView: 4,
						slidesPerGroup: 4,
					},
					0: {
						slidesPerView: 3,
						slidesPerGroup: 3,
					},
				}}
			>
				<div id={id} className="row__posters">
					{/** SEVERAL ROW__POSTER */}
					{movies.map((movie: Movie) => (
						<SwiperSlide key={movie.id}>
							<img
								key={movie.id}
								className={`row__poster ${isLargeRow && "row__posterLarge"}`}
								src={`${BASE_URL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
								alt={movie.name}
								onClick={() => handleClick(movie)} // 클릭시 이벤트 함수 실행
							/>
						</SwiperSlide>
					))}
				</div>
			</Swiper>
			{
				// modalOpen이 true일때, MovieModal을 보여준다.
				modalOpen && ( // props로 movie정보와, setModalOpen을 넘겨준다.
					<MovieModal movie={movieSelected} setModalOpen={setModalOpen} />
				)
			}
		</section>
	);
}
