import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "../../api/axios";
import BASE_URL from '../../api/baseUrl';

/**
 * 영화 상세 페이지
 */
export default function DetailPage() {
  const { movieId } = useParams();
  const [movie, setmovie] = useState({});

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `/movie/${movieId}`
      )
      setmovie(request.data);
    }

    fetchData();
  }, [movieId]);

  if (!movie) return <div>...loading</div>

  return (
    <section>
      <img
        className="modal__poster-img"
        src={`${BASE_URL}${movie.backdrop_path}`}
        alt="poster" />
    </section>
  )
}