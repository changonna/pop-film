// 영화
export interface MovieProps {
  id: number;
  poster_path?: string;
  backdrop_path?: string;
  title?: string;
  name?: string;
  original_name?: string;
  videos?: {
    results: any[]
  }
  overview?: string;
  media_type?: string;
}