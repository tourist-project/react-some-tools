import React, { FC } from 'react'
import styled from 'styled-components'

type Props = {
  children: React.ReactNode
}

export const Heading: FC<Props> = ({ children }) => {
  return <TopHeading>{children}</TopHeading>
}

const TopHeading = styled.h1`
  text-align: center;
`
