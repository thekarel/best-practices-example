import * as React from 'react'
import {Header, Button, Box, Footer} from 'grommet'
import styled from 'styled-components'

const Wrap = styled.div`
  margin: 0px auto;
  display: flex;
  flex-flow: column wrap;
  text-align: center;
  max-width: 500px;
  min-height: 80vh;
`

export const Page: React.FC<{children: React.ReactChild}> = ({children}) => (
  <>
    <Header background="brand" pad="large">
      Cupcakes for Sale
    </Header>

    <Wrap>{children}</Wrap>

    <Footer background="brand" pad="large">
      <span style={{margin: '0 auto'}}>THE END</span>
    </Footer>
  </>
)
