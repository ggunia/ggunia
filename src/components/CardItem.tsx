import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

const StyledCard = styled.div`
  height: 250px;
  border-radius: 8px;
  background-color: lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
`

const StyledCardTitle = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 60%;
  text-align: center;
`

const StyledCardDescription = styled.p`
  margin-top: 10px;
  width: 80%;
  text-align: center;
  color: gray;
`

type CardItemProps = {
  title: string,
  description: string,
  onClick: () => void,
}

const CardItem: FunctionComponent<CardItemProps> = ({ title, description, onClick }) => {
  return (
    <StyledCard onClick={onClick}>
      <StyledCardTitle title={title}>
        {title}
      </StyledCardTitle>
      <StyledCardDescription title={description}>
        {description.slice(0, 100).trim()}...
      </StyledCardDescription>
    </StyledCard>
  )
}

export default CardItem
