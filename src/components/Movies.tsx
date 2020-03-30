import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import useQueryFetcher from '../useQueryFetcher'
import { MovieType } from '../typescriptTypes'
import CardItem from './CardItem'

const StyledMoviesContainer = styled.div`
  display: grid;
  grid-gap: 50px;
  grid-template-columns: repeat(auto-fit, 250px);
  justify-content: center;
`

const Movies: FunctionComponent<{ search: string }> = ({ search }) => {
  const history = useHistory()
  const { data } = useQueryFetcher<MovieType[]>({ search, searchEndpoint: 'search/movie', initialValue: [], apiEndpoint: 'movie/upcoming' })

  const redirectToDetails = React.useCallback(
    (movieId) => () => history.push(`/movie/${movieId}/details`),
    [history]
  )

  return (
    <StyledMoviesContainer>
      {data.map((movie: MovieType) => (
        <CardItem
          key={movie.id}
          title={movie.original_title}
          description={movie.overview}
          onClick={redirectToDetails(movie.id)}
        />
      ))}
    </StyledMoviesContainer>
  )
}

export default Movies
