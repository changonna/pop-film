export interface Movie {
  readonly id: number;
  poster_path?: string; 
  backdrop_path?: string;
  first_air_date?: string;
  title?: string;
  name?: string;
  original_name?: string;
  videos?: {
    results: any[]
  }
  overview?: string;
  media_type?: string;
  vote_average?: number;
  release_date?: string;
}

export interface MovieModalProps extends Movie {
  setModalOpen: (isOpen: boolean) => void;
}