import {
  NavigationProp,
  useNavigation as useNativeNavigation,
} from '@react-navigation/native'

export enum Routes {
  EpisodeStack = 'EpisodeStack',
  EpisodeScreen = 'EpisodeScreen',
  DetailedEpisode = 'DetailedEpisode',
  CharacterStack = 'CharacterStack',
  CharacterScreen = 'CharacterScreen',
  DetailedCharacter = 'DetailedCharacter',
  MainNavigator = 'MainNavigator',
  LocationStack = 'LocationStack',
  LocationScreen = 'LocationScreen',
  DetailedLocation = 'DetailedLocation',
}

export const useNavigation = () =>
  useNativeNavigation<NavigationProp<Record<string, unknown>, Routes>>()
