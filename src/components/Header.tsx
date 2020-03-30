import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

type HeaderProps = {}

const StyledHeader = styled.div`
  background-color: #2980B9;
  color: white;
  padding: 20px 30px;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 36px;
  font-weight: normal;
`

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <StyledHeader>
      <StyledLink to="/">Movie Searcher</StyledLink>
    </StyledHeader>
  )
}

export default React.memo(Header)
