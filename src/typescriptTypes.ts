export type MovieType = {
  popularity: number,
  vote_count: number,
  video: boolean,
  poster_path: string,
  id: number,
  backdrop_path: string,
  original_language: string,
  original_title: string,
  genre_ids: Array<number>,
  title: string,
  vote_average: number,
  overview: string,
  release_date: string
}

export type MovieDetailType = {
  id: number,
  title: string,
  tagline: string,
  vote_average: number,
  release_date: string,
}

export type ActorType = {
  popularity: number,
  known_for_department: string,
  name: string,
  id: number,
  profile_path: string,
  adult: boolean,
  known_for: Array<any>,
  gender: number,
}

export type ActorDetailType = {
  id: number,
  name: string,
  biography: string,
}
