import React from 'react'
import Svg, { Path } from 'react-native-svg'

import { colors } from 'src/theme/colors'

interface Props {
  focused: boolean
}

export const CharacterIcon = ({ focused }: Props) => {
  return (
    <Svg width={28} height={28} fill="none">
      <Path
        d="M10.923 14.966a2.222 2.222 0 100-4.444 2.222 2.222 0 000 4.444zM17.59 14.966a2.222 2.222 0 100-4.444 2.222 2.222 0 000 4.444z"
        fill={focused ? colors.indigo : colors.inactive}
      />
      <Path
        d="M14.09 4C9.079 4 5 8.038 5 13l.052 8a3.518 3.518 0 003.483 3c1.186 0 2.095-.417 2.7-1.174a4.065 4.065 0 005.725-.014c.607.762 1.519 1.188 2.686 1.188 1.95 0 3.536-1.57 3.536-3.5V13c0-4.962-4.078-9-9.091-9z"
        stroke={focused ? colors.indigo : colors.inactive}
        strokeWidth={2}
      />
    </Svg>
  )
}
