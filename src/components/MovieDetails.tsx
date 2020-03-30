import React, { FunctionComponent } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import { MovieDetailType } from '../typescriptTypes'
import useQueryFetcher from '../useQueryFetcher'

const StyledList = styled.ul`
  width: 90%;
  margin: auto;
`

const initialValue: MovieDetailType = {
  id: 0,
  title: '',
  release_date: '',
  tagline: '',
  vote_average: 0,
}

const MovieDetails: FunctionComponent<{ apiEndpointPrefix: string }> = ({ apiEndpointPrefix }) => {
  const params: { id?: string } = useParams()

  const parseResponse = React.useCallback(
    data => data,
    []
  )

  const { loading, data } = useQueryFetcher<MovieDetailType>({
    apiEndpoint: `${apiEndpointPrefix}/${params.id}`,
    initialValue,
    parseResponse,
  })

  if (loading) return <div>Loading movie details</div>

  return (
    <StyledList>
      <li>Title -> {data.title}</li>
      <li>Tagline -> {data.tagline}</li>
      <li>Vote average -> {data.vote_average}</li>
      <li>Release date -> {data.release_date}</li>
    </StyledList>
  )
}

export default MovieDetails
