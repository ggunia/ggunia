import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

type NavigationItemProps = {
  exact?: boolean,
  path: string,
}

const StyledNavigationItem = styled(NavLink)`
  font-size: 36px;
  color: #000000;
  position: relative;
  text-decoration: none;
  text-align: center;

  &:before {
    content: "";
    position: absolute;
    left: 0px;
    bottom: -15px;
    width: 100%;
    height: 5px;
    background-color: #7F8C8D;
  }

  &.active:before {
    background-color: #2980B9;
  }
`

const NavigationItem: FunctionComponent<NavigationItemProps> = ({ exact, path, children }) => (
  <StyledNavigationItem exact={exact} to={path}>
    {children}
  </StyledNavigationItem>
)

export default NavigationItem
