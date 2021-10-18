import React from 'react'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { NavigationContainer } from '@react-navigation/native'

import { FilterProvider } from 'src/context/FilterContext'
import { AlertProvider } from 'src/modules/alert-context'
import { RootNavigation } from 'src/navigation/root'

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache({}),
})

export const App = () => {
  return (
    <FilterProvider>
      <ApolloProvider client={client}>
        <AlertProvider>
          <NavigationContainer>
            <RootNavigation />
          </NavigationContainer>
        </AlertProvider>
      </ApolloProvider>
    </FilterProvider>
  )
}
