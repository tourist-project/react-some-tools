import React, { FC } from 'react'
import styled from 'styled-components'

import { LinkButton } from '../components/Button'
import { Heading } from '../components/Heading'

export const TopPage: FC = () => {
  return (
    <>
      <Heading>トップページ</Heading>

      <ButtonWrapper>
        <LinkButton href="/calculator">電卓</LinkButton>
        <LinkButton href="/timer">タイマー</LinkButton>
      </ButtonWrapper>
    </>
  )
}

const ButtonWrapper = styled.div`
  padding-top: 100px;
  text-align: center;
`
