import styled from 'styled-components'

export const StyledCardsContainer = styled.div`
  display: grid;
  grid-gap: 50px;
  grid-template-columns: repeat(auto-fit, 250px);
  justify-content: center;

  @media (max-width: ${process.env.REACT_APP_MOBILE_BREAKPOINT}) {
    grid-template-columns: repeat(auto-fit, 80%);
  }
`

export const StyledList = styled.ul`
  width: 90%;
  margin: auto;
`
