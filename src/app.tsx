import React from 'react'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { NavigationContainer } from '@react-navigation/native'

import { CharactersFilterProvider } from 'src/context/character-filter'
import { EpisodesFilterProvider } from 'src/context/episodes-filter'
import { LocationsFilterProvider } from 'src/context/location-filter'
import { AlertProvider } from 'src/modules/alert-context'
import { RootNavigation } from 'src/navigation/root'

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache({}),
})

export const App = () => {
  return (
    <CharactersFilterProvider>
      <LocationsFilterProvider>
        <EpisodesFilterProvider>
          <ApolloProvider client={client}>
            <AlertProvider>
              <NavigationContainer>
                <RootNavigation />
              </NavigationContainer>
            </AlertProvider>
          </ApolloProvider>
        </EpisodesFilterProvider>
      </LocationsFilterProvider>
    </CharactersFilterProvider>
  )
}
