import React, { FunctionComponent } from 'react'
import { useHistory } from 'react-router-dom'

import { MovieType } from '../types/MovieTypes'
import useQueryFetcher from '../hooks/useQueryFetcher'
import CardItem from '../shared/CardItem'
import { StyledCardsContainer } from '../shared/StyledComponents'

const Movies: FunctionComponent<{ search: string }> = ({ search }) => {
  const history = useHistory()
  const { data } = useQueryFetcher<MovieType[]>({
    search,
    searchEndpoint: 'search/movie',
    initialValue: [],
    apiEndpoint: 'movie/upcoming'
  })

  const redirectToDetails = React.useCallback(
    (movieId) => () => history.push(`/movie/${movieId}/details`),
    [history]
  )

  return (
    <StyledCardsContainer>
      {data.map((movie: MovieType) => (
        <CardItem
          key={movie.id}
          title={movie.original_title}
          description={movie.overview}
          onClick={redirectToDetails(movie.id)}
        />
      ))}
    </StyledCardsContainer>
  )
}

export default Movies
