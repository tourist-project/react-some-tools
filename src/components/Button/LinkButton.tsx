import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

type Props = {
  href: string
  children: React.ReactNode
}

export const LinkButton: FC<Props> = ({ href, children }) => {
  return (
    <Link to={href}>
      <Button>{children}</Button>
    </Link>
  )
}

const Button = styled.button`
  margin: 12px 40px;
  padding: 8px;
  font-size: 3rem;
  cursor: pointer;
`
