import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Movies from './pages/Movies'
import Actors from './pages/Actors'
import MovieDetails from './pages/MovieDetails'
import ActorDetails from './pages/ActorDetails'

const StyledAppContainer = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 80px 80px auto;

  @media (max-width: ${process.env.REACT_APP_TABLET_BREAKPOINT}) {
    grid-template-rows: 60px 60px auto;
  }
`

const StyledContentContainer = styled.div`
  margin-top: 30px;
`

const App = () => {
  const [search, updateSearch] = React.useState<string>('')

  const handleSearch = React.useCallback(
    (event) => updateSearch(event.target.value),
    []
  )

  return (
    <BrowserRouter>
      <StyledAppContainer>
      <Header />

      <SearchBar searchValue={search} updateSearch={handleSearch} />

      <StyledContentContainer>
        <Switch>
          <Route exact path="/">
            <Movies search={search} />
          </Route>

          <Route path="/actors">
            <Actors search={search} />
          </Route>

          <Route path="/movie/:id/details">
            <MovieDetails apiEndpointPrefix="movie" />
          </Route>

          <Route path="/actor/:id/details">
            <ActorDetails apiEndpointPrefix="person" />
          </Route>
        </Switch>
      </StyledContentContainer>
    </StyledAppContainer>
    </BrowserRouter>
  )
}

export default App
