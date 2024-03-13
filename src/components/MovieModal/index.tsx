import BASE_URL from "../../api/baseUrl";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import "./MovieModal.css";
import React, { useRef } from 'react';

export interface MovieModalProps {
  id?: any
  poster_path?: any
  backdrop_path?: any
  title?: any
  overview?: any
  name?: any
  release_date?: any
  first_air_date?: any
  vote_average?: any
  setModalOpen?: any
  media_type?: any
}

function MovieModal({
  backdrop_path,
  title,
  overview,
  name,
  release_date,
  first_air_date,
  vote_average,
  setModalOpen
}: MovieModalProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(ref, () => {setModalOpen(false)});

  return (
    <div className='presentation'>
      <div className='wrapper-modal'>
      <div className='modal' ref={ref}>
          {/** x클릭시 modalOpen false로 변경하여 끄기 **/}
          <span onClick={() => setModalOpen(false)} className='modal-close'>
            X
          </span>
          <img
            className="modal__poster-img"
            src={`${BASE_URL}${backdrop_path}`}
            alt="modal__poster-img"
          />
          <div className="modal__content">
            <p className="modal__details">
              <span className="modal__user_perc">100% for you</span>{" "}
              {release_date ? release_date : first_air_date}
            </p>

            <h2 className="modal__title">{title ? title : name}</h2>
            <p className="modal__overview"> 평점: {vote_average}</p>
            <p className="modal__overview"> {overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;