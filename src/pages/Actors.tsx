import React, { FunctionComponent } from 'react'
import { useHistory } from 'react-router-dom'

import useQueryFetcher from '../hooks/useQueryFetcher'
import { ActorType } from '../types/ActorTypes'
import CardItem from '../shared/CardItem'
import { StyledCardsContainer } from '../shared/StyledComponents'

const Actors: FunctionComponent<{ search: string }> = ({ search }) => {
  const history = useHistory()
  const { data, loading } = useQueryFetcher<ActorType[]>({
    search,
    searchEndpoint: 'search/person',
    initialValue: [],
    apiEndpoint: 'person/popular',
  })

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
