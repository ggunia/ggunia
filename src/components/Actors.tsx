import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import useQueryFetcher from '../useQueryFetcher'
import { ActorType } from '../typescriptTypes'
import CardItem from './CardItem'

const StyledCardsContainer = styled.div`
  display: grid;
  grid-gap: 50px;
  grid-template-columns: repeat(auto-fit, 250px);
  justify-content: center;
`

const Actors: FunctionComponent<{ search: string }> = ({ search }) => {
  const history = useHistory()
  const { data, loading } = useQueryFetcher<ActorType[]>({ search, searchEndpoint: 'search/person', initialValue: [], apiEndpoint: 'person/popular' })

  const redirectToDetails = React.useCallback(
    (actorId) => () => history.push(`/actor/${actorId}/details`),
    [history]
  )

  if (loading) return <div>No results found</div>

  return (
    <StyledCardsContainer>
      {data.map((actor: ActorType) => (
        <CardItem
          key={actor.id}
          title={actor.name}
          description={actor.known_for_department}
          onClick={redirectToDetails(actor.id)}
        />
      ))}
    </StyledCardsContainer>
  )
}

export default Actors
