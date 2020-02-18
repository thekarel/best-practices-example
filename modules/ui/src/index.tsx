import {ClientContext, GraphQLClient} from 'graphql-hooks'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import 'regenerator-runtime/runtime'
import {DashboardContainer} from './dashboard/DashboardContainer'
import {getEnvConfigOrThrow} from './getEnvConfigOrThrow'
import {Grommet} from 'grommet'
import {theme} from './base/theme'
import {Page} from './base/Page'

if (module.hot) {
  module.hot.accept()
}

const config = getEnvConfigOrThrow()
const client = new GraphQLClient({url: config.graphUrl})

const Index = () => {
  return (
    <ClientContext.Provider value={client}>
      <Grommet full theme={theme}>
        <Page>
          <DashboardContainer />
        </Page>
      </Grommet>
    </ClientContext.Provider>
  )
}

ReactDOM.render(<Index />, document.getElementById('root'))
