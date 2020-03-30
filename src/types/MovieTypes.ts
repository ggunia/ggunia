interface Movie {
  id: number,
  popularity?: number,
  vote_count?: number,
  video?: boolean,
  poster_path?: string,
  backdrop_path?: string,
  original_language?: string,
  original_title?: string,
  title: string,
  vote_average: number,
  overview?: string,
  release_date: string
}

export interface MovieType extends Movie {
  original_title: string,
  overview: string,
  genre_ids: Array<number>,
}

export interface MovieDetailType extends Movie {
  imdb_id: string,
  tagline: string,
  revenue: number,
}
