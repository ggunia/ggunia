import React, { FunctionComponent, SyntheticEvent } from 'react'
import styled from 'styled-components'

import NavigationItem from '../shared/NavigationItem'

type TypeSearchBarProps = {
  searchValue: string,
  updateSearch: (event: SyntheticEvent) => void,
}

const StyledSearchBar = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 150px 150px auto;
  grid-column-gap: 20px;
  align-items: center;

  @media (max-width: ${process.env.REACT_APP_TABLET_BREAKPOINT}) {
    grid-template-columns: 60px 60px auto;
  }
`

const StyledInput = styled.input`
  border-radius: 8px;
  background-color: #C4C4C4;
  height: 36px;
  border: none;
  margin-top: 10px;
  padding: 10px;
  box-sizing: border-box;
  outline: none;
  width: 300px;
  margin-left: 50px;

  @media (max-width: ${process.env.REACT_APP_TABLET_BREAKPOINT}) {
    width: 200px;
  }
`

const SearchBar: FunctionComponent<TypeSearchBarProps> = ({ searchValue, updateSearch }) => (
  <StyledSearchBar>
    <NavigationItem exact path="/">Movies</NavigationItem>
    <NavigationItem path="/actors">Actors</NavigationItem>

    <StyledInput value={searchValue} placeholder="Search..." onChange={updateSearch} />
  </StyledSearchBar>
)

export default SearchBar
