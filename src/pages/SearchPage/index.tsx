import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import "./SearchPage.css";
import useDebounce from "../../hooks/useDebounce";
import { Movie } from "../../interfaces";

function SearchPage() {
	const navigate = useNavigate();
	const [searchResults, setSearchResults] = useState<Movie[]>([]);

	const useQuery = () => new URLSearchParams(useLocation().search);

	const query = useQuery();
	const searchTerm: string = query.get("q")!;
	const debounceSearchTerm = useDebounce(searchTerm, 500);

	useEffect(() => {
		if (debounceSearchTerm) {
			fetchSearchMovie(debounceSearchTerm);
		}
	}, [debounceSearchTerm]);

	/**
	 * 영화검색
	 * @param term : 영화검색어
	 * @returns {Promise<void>}
	 */
	const fetchSearchMovie = async (term: string): Promise<void> => {
		try {
			const request = await axios.get(
				`/search/multi?include_adult=false&query=${term}`, // 성인 영화 제외
			);
			setSearchResults(request.data.results);
		} catch (e) {
			alert(e);
		}
	};

	/**
	 * 검색결과 렌더링 함수
	 * @returns {Element}
	 */
	const renderSearchResults = () =>
		searchResults.length > 0 ? (
			<section className="search-container">
				{searchResults.map((movie: Movie) => {
					if (movie.backdrop_path !== null && movie.media_type !== "person") {
						const movieImageUrl = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
						return (
							<div className="movie">
								<div
									onClick={() => navigate(`/${movie.id}`)}
									className="movie__column-poster"
								>
									<img
										src={movieImageUrl}
										alt="moviePoster"
										className="movie__poster"
									/>
								</div>
							</div>
						);
					}
					return null;
				})}
			</section>
		) : (
			<section className="no-results">
				<div className="no-results__text">
					<p>
						찾고자하는 검색어&quot;{debounceSearchTerm}&quot;에 맞는 영화가
						없습니다.
					</p>
				</div>
			</section>
		);

	return renderSearchResults();
}

export default SearchPage;
