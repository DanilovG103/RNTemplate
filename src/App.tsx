import React from 'react'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { NavigationContainer } from '@react-navigation/native'

import { RootNavigation } from 'src/navigation/root'

import { AlertProvider } from './modules/alert-context'

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        characters: {
          keyArgs: false,
          read(existing) {
            return existing && Object.values(existing)
          },
          merge(existing, incoming) {
            return existing?.concat(incoming)
          },
        },
      },
    },
  },
})

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache,
})

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <AlertProvider>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </AlertProvider>
    </ApolloProvider>
  )
}
