import React from 'react'
import Svg, { Path } from 'react-native-svg'

import { colors } from 'src/theme/colors'

interface Props {
  focused: boolean
}

export const EpisodeIcon = ({ focused }: Props) => {
  return (
    <Svg width={28} height={28} fill="none">
      <Path
        d="M23.333 8.167H4.667A2.333 2.333 0 002.333 10.5v12.833a2.333 2.333 0 002.334 2.334h18.666a2.333 2.333 0 002.334-2.334V10.5a2.333 2.333 0 00-2.334-2.333z"
        stroke={focused ? colors.indigo : colors.inactive}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.833 2.333L14 8.167 8.167 2.333"
        stroke={focused ? colors.indigo : colors.inactive}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}
